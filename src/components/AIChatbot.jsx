import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = ({
    isSystemIdle = false,
    onIdleClose = () => {},
    isChatOpen: controlledChatOpen,
    setIsChatOpen: controlledSetChatOpen
}) => {

    // ===============================
    // CHAT OPEN STATE
    // ===============================

    const [localChatOpen, setLocalChatOpen] = useState(false);

    const isChatOpen =
        controlledChatOpen !== undefined
            ? controlledChatOpen
            : localChatOpen;

    const setIsChatOpen =
        controlledSetChatOpen !== undefined
            ? controlledSetChatOpen
            : setLocalChatOpen;

    // ===============================
    // STATES
    // ===============================

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [conversationStarted, setConversationStarted] = useState(false);

    const messagesEndRef = useRef(null);
    const abortControllerRef = useRef(null);

    // ===============================
    // CONFIG
    // ===============================

    // Put this in .env
    // VITE_AGENT_API_URL=https://your-url.trycloudflare.com/automation/stream

    // const AGENT_API_URL =
    //     import.meta.env.VITE_AGENT_API_URL ||
    //     "https://diy-ongoing-chess-cartridges.trycloudflare.com/automation/stream";
    const AGENT_API_URL = "https://diy-ongoing-chess-cartridges.trycloudflare.com/automation";

    // 15 minutes
    const REQUEST_TIMEOUT_MS = 900000;

    // ===============================
    // AUTO OPEN WHEN IDLE
    // ===============================

    useEffect(() => {
        if (isSystemIdle && !isChatOpen) {
            setIsChatOpen(true);
            setConversationStarted(false);
            setMessages([]);
        }
    }, [isSystemIdle, isChatOpen, setIsChatOpen]);

    // ===============================
    // AUTO SCROLL
    // ===============================

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // ===============================
    // CLEANUP ON UNMOUNT
    // ===============================

    useEffect(() => {
        return () => {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);

    // ===============================
    // SEND MESSAGE
    // ===============================

    const handleSendMessage = async (e) => {
        e.preventDefault();

        if (!inputValue.trim()) return;

        // Prevent spam clicks
        if (isTyping) return;

        const userMessage = {
            id: Date.now(),
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);

        const question = inputValue;

        setInputValue("");

        await sendAgentRequest(question);
    };

    // ===============================
    // AI REQUEST
    // ===============================

    const sendAgentRequest = async (question) => {

        // Abort previous request
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        setIsTyping(true);

        const botMessageId = Date.now() + 1;

        const botMessage = {
            id: botMessageId,
            text: "",
            sender: "bot",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);

        const controller = new AbortController();

        abortControllerRef.current = controller;

        // Timeout handling
        const timeoutId = window.setTimeout(() => {
            controller.abort();
        }, REQUEST_TIMEOUT_MS);

        try {

            const response = await fetch(AGENT_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    question
                }),
                signal: controller.signal
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.status}`);
            }

            // ===============================
            // STREAMING RESPONSE
            // ===============================

            const reader = response.body.getReader();

            const decoder = new TextDecoder();

            let fullText = '';

            while (true) {

                const { done, value } = await reader.read();

                if (done) break;

                const chunk = decoder.decode(value, {
                    stream: true
                });

                fullText += chunk;

                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === botMessageId
                            ? {
                                ...msg,
                                text: fullText
                            }
                            : msg
                    )
                );
            }

        } catch (error) {

            console.error("AI Error:", error);

            let errorMessage = '';

            if (error.name === 'AbortError') {

                errorMessage =
                    'The request timed out. Please try again.';

            } else {

                errorMessage =
                    `Connection lost. Please check:
- Flask server running
- Cloudflare tunnel active
- Internet connection`;
            }

            setMessages(prev =>
                prev.map(msg =>
                    msg.id === botMessageId
                        ? {
                            ...msg,
                            text: errorMessage
                        }
                        : msg
                )
            );

        } finally {

            window.clearTimeout(timeoutId);

            setIsTyping(false);

            abortControllerRef.current = null;
        }
    };

    // ===============================
    // START CONVERSATION
    // ===============================

    const handleStartConversation = () => {

        setConversationStarted(true);

        const initialMessage = {
            id: 1,
            text: "How may I help you today?",
            sender: "bot",
            timestamp: new Date()
        };

        setMessages([initialMessage]);

        onIdleClose();
    };

    // ===============================
    // CLOSE CHAT
    // ===============================

    const handleCloseChat = () => {

        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        setIsChatOpen(false);

        setConversationStarted(false);

        setMessages([]);

        setIsTyping(false);

        onIdleClose();
    };

    // ===============================
    // UI
    // ===============================

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:right-auto sm:w-[380px] z-40 pointer-events-none">

            {/* CHAT WINDOW */}

            <div
                className={`
                    ${isChatOpen
                        ? 'opacity-100 pointer-events-auto translate-y-0'
                        : 'opacity-0 pointer-events-none translate-y-4'
                    }

                    bg-surface-dark
                    border border-primary/40
                    rounded-2xl
                    shadow-[0_0_30px_rgba(255,106,0,0.3)]
                    overflow-hidden
                    w-full
                    h-[450px]
                    max-h-[80vh]
                    sm:max-h-none
                    sm:h-[400px]
                    md:h-[450px]
                    flex flex-col
                    transition-all duration-300
                `}
            >

                {/* HEADER */}

                <div className="bg-background-dark border-b border-primary/20 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">

                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-sm sm:text-xl">
                                smart_toy
                            </span>
                        </div>

                        <div className="min-w-0">
                            <h3 className="text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-tight truncate">
                                AI Assistant
                            </h3>

                            <p className="text-[8px] sm:text-[10px] text-primary uppercase tracking-widest">
                                {conversationStarted
                                    ? 'Ready to assist'
                                    : 'System Idle'}
                            </p>
                        </div>

                    </div>

                    <button
                        onClick={handleCloseChat}
                        className="text-slate-400 hover:text-primary transition-colors p-1 flex-shrink-0 cursor-pointer"
                    >
                        <span className="material-symbols-outlined text-lg">
                            close
                        </span>
                    </button>

                </div>

                {/* MESSAGES */}

                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-background-dark/50 custom-scrollbar">

                    {!conversationStarted ? (

                        <div className="h-full flex flex-col items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4">

                            <div className="text-center">

                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40 mx-auto mb-3 sm:mb-4">
                                    <span className="material-symbols-outlined text-2xl sm:text-4xl text-primary">
                                        smart_toy
                                    </span>
                                </div>

                                <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-2">
                                    System Ready
                                </h4>

                                <p className="text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">
                                    I'm here to help you with your project.
                                    Let's start a conversation!
                                </p>

                            </div>

                            <button
                                onClick={handleStartConversation}
                                className="bg-primary text-background-dark px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] w-full sm:w-auto max-w-xs cursor-pointer"
                            >
                                OK, Let's Talk
                            </button>

                        </div>

                    ) : (

                        <>
                            {messages.map((message) => (

                                <div
                                    key={message.id}
                                    className={`flex ${
                                        message.sender === 'user'
                                            ? 'justify-end'
                                            : 'justify-start'
                                    } px-1`}
                                >

                                    <div
                                        className={`
                                            px-3 sm:px-4 py-2 sm:py-3 rounded-lg

                                            ${message.sender === 'user'
                                                ? 'bg-primary text-background-dark font-medium max-w-[85%] sm:max-w-xs'
                                                : 'bg-surface-dark border border-primary/20 text-slate-100 max-w-[85%] sm:max-w-xs'
                                            }
                                        `}
                                    >

                                        <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">
                                            {message.text}
                                        </p>

                                        <span className="text-[8px] sm:text-[10px] opacity-70 block mt-1">
                                            {message.timestamp.toLocaleTimeString(
                                                'en-US',
                                                {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                    hour12: true
                                                }
                                            )}
                                        </span>

                                    </div>

                                </div>
                            ))}

                            {/* TYPING */}

                            {isTyping && (
                                <div className="flex justify-start px-1">

                                    <div className="bg-surface-dark border border-primary/20 text-slate-100 px-3 sm:px-4 py-2 sm:py-3 rounded-lg">

                                        <div className="flex gap-1 sm:gap-2">

                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]"></div>

                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]"></div>

                                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]"></div>

                                        </div>

                                    </div>

                                </div>
                            )}
                        </>
                    )}

                    <div ref={messagesEndRef} />

                </div>

                {/* INPUT */}

                {conversationStarted && (

                    <div className="border-t border-primary/20 bg-background-dark p-3 sm:p-4 flex-shrink-0">

                        <form
                            onSubmit={handleSendMessage}
                            className="flex gap-2 sm:gap-3"
                        >

                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="How may I help you?"
                                disabled={isTyping}
                                className="flex-1 bg-surface-dark border border-primary/20 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none transition-colors disabled:opacity-60"
                            />

                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isTyping}
                                className="bg-primary text-background-dark px-3 sm:px-4 py-2 rounded-lg font-bold uppercase text-[10px] sm:text-xs tracking-wider hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0 cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-sm sm:text-base">
                                    send
                                </span>
                            </button>

                        </form>

                    </div>
                )}

            </div>
        </div>
    );
};

export default AIChatbot;