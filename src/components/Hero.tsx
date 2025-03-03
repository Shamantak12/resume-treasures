
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16 pb-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="w-full md:w-3/5 text-center md:text-left">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <p className="text-primary font-medium tracking-wide mb-4">Creative Developer</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Charles Bruyerre
            </h1>
            
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <p className="text-lg text-foreground/80 mb-8 leading-relaxed max-w-2xl">
                I'm a creative developer with a passion for building beautiful, 
                interactive experiences on the web. I combine code and design 
                to create engaging digital products.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <a 
                href="#projects" 
                className="group flex items-center text-primary font-medium"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-border">
              <img 
                src="/lovable-uploads/277516c8-63e7-42a6-975e-786add466169.png" 
                alt="Charles Bruyerre" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
