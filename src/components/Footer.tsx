
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 bg-[#111111] border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">S<span className="text-purple-500">.</span></div>
            <p className="text-gray-400 mt-2">Full Stack Developer & ML Enthusiast</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:shamantakanayak@gmail.com" 
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shamant-nayak-8052b0217/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/Shamantak12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Shamantak A Nayak. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
            <a 
              href="#home" 
              className="text-sm text-gray-400 hover:text-purple-500 transition-colors"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
