import React, { useState, useRef, useEffect } from 'react';

const AIChatbot = ({ isSystemIdle = false, onIdleClose = () => {} }) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [conversationStarted, setConversationStarted] = useState(false);

    useEffect(() => {
        if (isSystemIdle && !isChatOpen) {
            setIsChatOpen(true);
            setConversationStarted(false);
            setMessages([]);
        }
    }, [isSystemIdle]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: generateBotResponse(inputValue),
                sender: "bot",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 800);
    };

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

    const generateBotResponse = (userInput) => {
        const responses = {
            hello: "Hello! I'm here to help you build amazing projects. What are you interested in?",
            project: "Great! Tell me more about your project vision. I can help with SaaS infrastructure, web apps, mobile development, or security audits.",
            course: "We offer comprehensive courses on advanced architectural patterns, system design, and modern tech stacks. Would you like to explore our curriculum?",
            help: "I can assist you with various areas - project consultation, technical guidance, course information, or connecting you with our team. What interests you?",
            price: "Our pricing is flexible and scales with your project requirements. You can select from Micro-service, Standard Build, or Enterprise Grade options.",
            contact: "You can reach out directly to our team at hello@akwithcode.system for a personalized consultation.",
            default: "That's interesting! I'm here to help guide you through our services. Feel free to ask about courses, projects, or how we can collaborate."
        };

        const lowerInput = userInput.toLowerCase();
        for (const key in responses) {
            if (lowerInput.includes(key)) {
                return responses[key];
            }
        }
        return responses.default;
    };

    return (
        <div className="fixed inset-0 z-40 pointer-events-none flex flex-col-reverse items-start justify-end gap-2 sm:gap-4 sm:bottom-4 sm:left-4 sm:inset-auto p-0 sm:p-0">
            {/* Chat Window */}
            <div
                className={`${
                    isChatOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
                } bg-surface-dark border border-primary/40 rounded-none sm:rounded-2xl sm:rounded-bl-none shadow-[0_0_30px_rgba(255,106,0,0.3)] overflow-hidden
                w-full sm:w-[380px] 
                h-screen sm:h-[400px] 
                w-full md:w-[380px] 
                h-screen md:h-[350px] 
                w-full lg:w-[380px] 
                h-screen lg:h-[450px] 
                
                flex flex-col transition-all duration-300`}
            >
                {/* Chat Header */}
                <div className="bg-background-dark border-b border-primary/20 p-3 sm:p-4 flex items-center justify-between flex-shrink-0">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 flex-shrink-0">
                            <span className="material-symbols-outlined text-primary text-sm sm:text-xl">smart_toy</span>
                        </div>
                        <div className="min-w-0">
                            <h3 className="text-xs sm:text-sm font-bold text-slate-100 uppercase tracking-tight truncate">AI Assistant</h3>
                            <p className="text-[8px] sm:text-[10px] text-primary uppercase tracking-widest">{conversationStarted ? 'Ready to assist' : 'System Idle'}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setIsChatOpen(false);
                            setConversationStarted(false);
                            setMessages([]);
                            onIdleClose();
                        }}
                        className="text-slate-400 hover:text-primary transition-colors p-1 flex-shrink-0"
                    >
                        <span className="material-symbols-outlined text-lg">close</span>
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-background-dark/50 custom-scrollbar">
                    {!conversationStarted ? (
                        <div className="h-full flex flex-col items-center justify-center gap-4 sm:gap-6 py-6 sm:py-8 px-4">
                            <div className="text-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40 mx-auto mb-3 sm:mb-4">
                                    <span className="material-symbols-outlined text-2xl sm:text-4xl text-primary">smart_toy</span>
                                </div>
                                <h4 className="text-base sm:text-lg font-bold text-slate-100 mb-2">System Ready</h4>
                                <p className="text-xs sm:text-sm text-slate-400 max-w-xs leading-relaxed">I'm here to help you with your project. Let's start a conversation!</p>
                            </div>
                            <button
                                onClick={handleStartConversation}
                                className="bg-primary text-background-dark px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(255,106,0,0.3)] w-full sm:w-auto max-w-xs"
                            >
                                OK, Let's Talk
                            </button>
                        </div>
                    ) : (
                        <>
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} px-1`}
                                >
                                    <div
                                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
                                            message.sender === 'user'
                                                ? 'bg-primary text-background-dark font-medium max-w-[85%] sm:max-w-xs'
                                                : 'bg-surface-dark border border-primary/20 text-slate-100 max-w-[85%] sm:max-w-xs'
                                        }`}
                                    >
                                        <p className="text-xs sm:text-sm break-words">{message.text}</p>
                                        <span className="text-[8px] sm:text-[10px] opacity-70 block mt-1">
                                            {message.timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
                                        </span>
                                    </div>
                                </div>
                            ))}
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

                {/* Input */}
                {conversationStarted && (
                    <div className="border-t border-primary/20 bg-background-dark p-3 sm:p-4 flex-shrink-0">
                        <form onSubmit={handleSendMessage} className="flex gap-2 sm:gap-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="How may I help you?"
                                className="flex-1 bg-surface-dark border border-primary/20 rounded-lg px-3 sm:px-4 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:border-primary/50 focus:outline-none transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="bg-primary text-background-dark px-3 sm:px-4 py-2 rounded-lg font-bold uppercase text-[10px] sm:text-xs tracking-wider hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
                            >
                                <span className="material-symbols-outlined text-sm sm:text-base">send</span>
                            </button>
                        </form>
                    </div>
                )}
            </div>

            {/* Chat Toggle Button */}
            {/* <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] text-background-dark flex items-center justify-center pointer-events-auto transition-all duration-300 transform hover:scale-110 group border-2 border-primary/50 fixed bottom-4 left-4 sm:static"
            >
                {isChatOpen ? (
                    <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl ">close</span>
                ) : (
                    <span className="material-symbols-outlined text-2xl sm:text-3xl md:text-4xl animate-bounce">chat</span>
                )}
            </button> */}
        </div>
    );
};

export default AIChatbot;
