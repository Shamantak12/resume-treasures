
import { Brain, Database, Cpu, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-4 md:px-6 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative overflow-hidden rounded-xl group">
              <img 
                src="/lovable-uploads/277516c8-63e7-42a6-975e-786add466169.png" 
                alt="Shamantak A Nayak" 
                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5"></div>
              
              {/* AI/ML Animated overlay elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/4 left-1/4 animate-float-slow" style={{ animationDelay: '0.2s' }}>
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <div className="absolute top-1/2 right-1/4 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <div className="absolute bottom-1/4 left-1/3 animate-float-slow" style={{ animationDelay: '0.8s' }}>
                  <Cpu className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute top-1/3 right-1/3 animate-float-slow" style={{ animationDelay: '1.1s' }}>
                  <Code className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
            </div>
          </div>
          
          <div id="about-section" className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            
            <div className="w-16 h-1 bg-purple-500 mb-6"></div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                A passionate <span className="text-purple-400 font-medium">Full Stack Developer</span> with specialized 
                expertise in <span className="text-gradient font-medium">Machine Learning</span> and 
                <span className="text-blue-400 font-medium"> Artificial Intelligence</span>.
              </p>
              <p>
                I'm deeply focused on the intersection of web development and AI technologies,
                creating intelligent applications that leverage data to solve complex problems.
                My work spans from developing predictive models to implementing 
                neural networks for real-world applications.
              </p>
              <p>
                With expertise in frameworks like <span className="text-yellow-400">TensorFlow</span>, 
                <span className="text-blue-400"> PyTorch</span>, and <span className="text-green-400">scikit-learn</span>,
                I've worked on various projects including chronic disease prediction,
                natural language processing systems, and computer vision applications.
              </p>
              <p>
                My goal is to build AI-driven solutions that are not just technically sound
                but also ethically responsible and user-friendly.
              </p>
            </div>
            
            {/* Tech icon grid with animations */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <Brain className="w-6 h-6" />, label: "Machine Learning" },
                { icon: <Database className="w-6 h-6" />, label: "Big Data" },
                { icon: <Cpu className="w-6 h-6" />, label: "Neural Networks" },
                { icon: <Code className="w-6 h-6" />, label: "AI Development" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:-translate-y-1 cursor-pointer shimmer-border"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="text-purple-500 mb-2 animate-pulse-slow">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center">{item.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-8 py-4 border border-purple-500 text-purple-500 rounded-full font-medium hover:bg-purple-500/10 transition-all shimmer-border"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
