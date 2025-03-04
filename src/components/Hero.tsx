
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen w-full flex items-center justify-center pt-16 overflow-hidden px-4 md:px-6 lg:px-8 relative"
    >
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`overflow-hidden mb-6 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              Shamantak <span className="text-gradient">A Nayak</span>
            </h1>
          </div>
          
          <div 
            className={`w-20 h-1 bg-purple-500 mb-6 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          ></div>
          
          <p 
            className={`text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '700ms' }}
          >
            Full Stack Developer & ML Enthusiast specialized in creating modern web applications with stunning user experiences.
          </p>
          
          <div 
            className={`transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-black bg-purple-500 rounded-full hover:bg-purple-400 transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/25"
            >
              View My Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
