
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

const ExperiencePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Page load animations
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`min-h-screen bg-[#0E0E0E] text-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden data-visualization">
          <div className="absolute top-[10%] left-[15%] w-[30rem] h-[30rem] bg-purple-900/10 rounded-full filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute top-[40%] right-[15%] w-[25rem] h-[25rem] bg-blue-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-[10%] left-[25%] w-[20rem] h-[20rem] bg-indigo-900/10 rounded-full filter blur-[120px] animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
          
          {/* Neural network inspired animated elements */}
          <div className="absolute top-[60%] left-[60%] w-[15rem] h-[15rem] bg-purple-900/5 rounded-full filter blur-[100px] animate-rotate-slow"></div>
          <div className="absolute top-[25%] left-[70%] w-[10rem] h-[10rem] bg-indigo-900/5 rounded-full filter blur-[80px] animate-float-slow"></div>
        </div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <div className="pt-24 pb-12">
            <div className="container mx-auto px-6">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 mt-12 animate-fade-in">
                Work <span className="text-purple-500">Experience</span>
              </h1>
              <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 animate-fade-in">
                My professional journey across various roles and organizations, showcasing my growth and contributions.
              </p>
            </div>
          </div>
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default ExperiencePage;
