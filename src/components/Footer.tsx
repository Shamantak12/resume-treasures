
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Charles Bruyerre. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@charlesbruyerre.com" 
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              Email
            </a>
            <a 
              href="https://www.linkedin.com/in/charles-bruyerre/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/cbruyerre" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
