
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <p className="text-primary mb-4 font-medium tracking-wide">Full Stack Developer & ML Enthusiast</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Shamantak A Nayak
          </h1>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              A passionate Jr. Full Stack Developer with experience in web development and 
              machine learning. Specializing in creating efficient, user-friendly applications 
              and exploring the frontiers of AI technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-transparent border border-primary/30 text-primary rounded-full font-medium hover:bg-primary/5 transition-all"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-primary/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
