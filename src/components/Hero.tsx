
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <img 
                src="/lovable-uploads/277516c8-63e7-42a6-975e-786add466169.png" 
                alt="Charles Bruyerre" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <div className="inline-block animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <p className="text-primary mb-4 font-medium tracking-wide">Creative Developer</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              Charles Bruyerre
            </h1>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-3xl">
                I'm a creative developer with a passion for building beautiful, 
                interactive experiences on the web. I combine code and design 
                to create engaging digital products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
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
