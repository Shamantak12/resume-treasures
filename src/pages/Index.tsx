
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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

  // Add floating animation effect to elements
  useEffect(() => {
    const addFloatingEffect = () => {
      const elements = document.querySelectorAll('.section-heading, .skill-card, .project-card');
      elements.forEach((el, index) => {
        el.classList.add('animate-float-slow');
        // Stagger animation timing
        (el as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      });
    };
    
    // Add shimmer effect to important buttons
    const addShimmerEffect = () => {
      const buttons = document.querySelectorAll('.primary-button, .highlight-element');
      buttons.forEach(button => {
        button.classList.add('shimmer-border');
      });
    };

    // Run after elements have loaded
    setTimeout(() => {
      addFloatingEffect();
      addShimmerEffect();
    }, 500);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-[#0E0E0E] text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-purple-900/10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-[40%] right-[15%] w-[25rem] h-[25rem] bg-blue-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-[20rem] h-[20rem] bg-indigo-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          
          {/* Add new animated elements */}
          <div className="absolute top-[60%] left-[60%] w-[15rem] h-[15rem] bg-purple-900/5 rounded-full filter blur-[100px] animate-rotate-slow"></div>
          <div className="absolute top-[25%] left-[70%] w-[10rem] h-[10rem] bg-indigo-900/5 rounded-full filter blur-[80px] animate-float-slow"></div>
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
