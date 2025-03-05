
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Home, User, Briefcase, Code, Mail, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home, path: '/' },
    { name: 'About', href: '#about', icon: User, path: '/' },
    { name: 'Projects', href: '#projects', icon: Code, path: '/' },
    { name: 'Skills', href: '#skills', icon: Briefcase, path: '/' },
    { name: 'Contact', href: '#contact', icon: Mail, path: '/' },
    { name: 'Worked With', href: '', icon: Building, path: '/worked-with' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        isScrolled 
          ? 'bg-[#0E0E0E]/90 backdrop-blur-md py-3 shadow-md' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-wider text-white relative z-50 hover:text-purple-400 transition-colors">
          S<span className="text-purple-500 animate-pulse-slow">.</span>
        </Link>
        
        {/* Menu Button - Only element in the header */}
        <button 
          className="focus:outline-none text-gray-300 relative z-50 hover:text-purple-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white animate-scale-in" />
          ) : (
            <Menu className="h-6 w-6 hover:rotate-12 transition-transform duration-300" />
          )}
        </button>
      </div>
      
      {/* Circular Navigation Menu */}
      <div className={cn(
        "fixed inset-0 z-40 transition-opacity duration-500",
        mobileMenuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
      )}>
        <div className={cn(
          "absolute inset-0 bg-black/90 backdrop-blur-lg transition-opacity duration-500",
          mobileMenuOpen ? "opacity-100" : "opacity-0"
        )}></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {navLinks.map((link, index) => {
              // Calculate position in the circle
              const angle = (index * (2 * Math.PI / navLinks.length)) - Math.PI/2;
              const radius = 120; // Distance from center
              const top = 50 + radius * Math.sin(angle);
              const left = 50 + radius * Math.cos(angle);
              
              const Icon = link.icon;
              
              return (
                link.path === '/' ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "absolute flex flex-col items-center justify-center w-20 h-20 rounded-full bg-purple-600/20 backdrop-blur-sm text-white hover:bg-purple-600 transition-all duration-500 transform shimmer-border",
                      mobileMenuOpen 
                        ? "scale-100 opacity-100" 
                        : "scale-0 opacity-0"
                    )}
                    style={{ 
                      top: `${top}%`, 
                      left: `${left}%`, 
                      transform: `translate(-50%, -50%) ${mobileMenuOpen ? 'scale(1)' : 'scale(0)'}`,
                      transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <Icon className="h-6 w-6 mb-1" />
                    <span className="text-xs">{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "absolute flex flex-col items-center justify-center w-20 h-20 rounded-full bg-purple-600/20 backdrop-blur-sm text-white hover:bg-purple-600 transition-all duration-500 transform shimmer-border",
                      mobileMenuOpen 
                        ? "scale-100 opacity-100" 
                        : "scale-0 opacity-0"
                    )}
                    style={{ 
                      top: `${top}%`, 
                      left: `${left}%`, 
                      transform: `translate(-50%, -50%) ${mobileMenuOpen ? 'scale(1)' : 'scale(0)'}`,
                      transitionDelay: mobileMenuOpen ? `${index * 100}ms` : '0ms',
                    }}
                  >
                    <Icon className="h-6 w-6 mb-1" />
                    <span className="text-xs">{link.name}</span>
                  </Link>
                )
              );
            })}
            
            {/* Center circle */}
            <div 
              className={cn(
                "absolute top-1/2 left-1/2 w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 shadow-lg shadow-purple-500/30",
                mobileMenuOpen ? "scale-100" : "scale-0"
              )}
            >
              <span className="text-white font-bold text-lg animate-pulse-slow">MENU</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
