
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-heading">Contact</h2>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/80 mb-8">
            I'm currently available for freelance work. If you have a project that you want to get started,
            think you need my help with something or just fancy saying hello, then get in touch.
          </p>
          
          <a 
            href="mailto:hello@charlesbruyerre.com"
            className="inline-flex items-center text-primary font-medium group"
          >
            <Mail className="h-5 w-5 mr-2" />
            <span>hello@charlesbruyerre.com</span>
          </a>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://www.linkedin.com/in/charles-bruyerre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/cbruyerre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a 
              href="https://charlesbruyerre.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Website"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
