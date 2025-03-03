
import { Mail, Linkedin, Github, Globe } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { 
      icon: <Mail className="h-5 w-5" />, 
      label: 'Email', 
      value: 'hello@charlesbruyerre.com',
      link: 'mailto:hello@charlesbruyerre.com'
    },
    { 
      icon: <Globe className="h-5 w-5" />, 
      label: 'Website', 
      value: 'charlesbruyerre.com',
      link: 'https://charlesbruyerre.com'
    },
    { 
      icon: <Linkedin className="h-5 w-5" />, 
      label: 'LinkedIn', 
      value: 'charles-bruyerre',
      link: 'https://www.linkedin.com/in/charles-bruyerre/'
    },
    { 
      icon: <Github className="h-5 w-5" />, 
      label: 'GitHub', 
      value: 'cbruyerre',
      link: 'https://github.com/cbruyerre'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Get in Touch</h2>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-fade-in opacity-0"
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
              >
                <div className="bg-white rounded-xl p-6 border border-border shadow-sm h-full card-hover">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary/10 rounded-full text-primary">
                      {item.icon}
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">{item.label}</h3>
                      <p className="text-base font-semibold">{item.value}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Interested in working together? I'm always open to discussing new projects
              and creative collaborations.
            </p>
            
            <div className="mt-8">
              <a 
                href="mailto:hello@charlesbruyerre.com"
                className="px-8 py-3 bg-primary text-white rounded-full font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
