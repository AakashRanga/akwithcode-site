import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SaaSSection from './components/SaaSSection';
import ArticleGrid from './components/ArticleGrid';
import TopTracks from './components/TopTracks';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Courses from './components/Courses';
import Topics from './components/Topics';
import Blog from './components/Blog';
import Connect from './components/Connect';
import BlogArticle from './components/BlogArticle';
import CourseCurriculum from './components/CourseCurriculum';
import CourseLesson from './components/CourseLesson';

const Home = () => (
  <main className="max-w-7xl mx-auto px-6 py-8 space-y-16 relative z-10 transition-all duration-300">
    <Hero />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-16">
        <SaaSSection />
        <ArticleGrid />
        <TopTracks />
      </div>
      <Sidebar />
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white relative">
        <div className="fixed inset-0 grain-overlay z-[60] pointer-events-none"></div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/curriculum" element={<CourseCurriculum />} />
          <Route path="/courses/lesson" element={<CourseLesson />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-articles" element={<BlogArticle />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
