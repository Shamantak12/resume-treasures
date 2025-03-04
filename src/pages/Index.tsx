
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BubbleCursor from "@/components/BubbleCursor";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Reveal animations on scroll
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.hidden-element');
    hiddenElements.forEach(el => observer.observe(el));

    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div 
      className={`min-h-screen bg-[#0E0E0E] text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Bubble cursor animation */}
      <BubbleCursor />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-purple-900/10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-[40%] right-[15%] w-[25rem] h-[25rem] bg-blue-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-[20rem] h-[20rem] bg-indigo-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
