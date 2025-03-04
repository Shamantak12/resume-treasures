
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center pt-16 overflow-hidden px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            Shamantak A Nayak
          </h1>
          
          <div className="w-20 h-1 bg-purple-500 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}></div>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
            Full Stack Developer & ML Enthusiast specialized in creating modern web applications with stunning user experiences.
          </p>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-black bg-purple-500 rounded-full hover:bg-purple-400 transition-all transform hover:translate-y-[-3px]"
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
