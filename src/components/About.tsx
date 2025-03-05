
import { Brain, Database, Cpu, Code, BarChart3, PieChart, ArrowRight, Server } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dataPoints = useRef<{ x: number, y: number, size: number, delay: number, color: string }[]>([]);
  
  // Generate random data points for the background visualization
  useEffect(() => {
    dataPoints.current = Array(20).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 2 + Math.random() * 8,
      delay: Math.random() * 5,
      color: [
        'rgba(139, 92, 246, 0.7)', // Purple
        'rgba(16, 185, 129, 0.7)', // Green
        'rgba(59, 130, 246, 0.7)', // Blue
        'rgba(236, 72, 153, 0.7)', // Pink
      ][Math.floor(Math.random() * 4)]
    }));
  }, []);

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
    <section id="about" className="py-24 px-4 md:px-6 lg:px-8 bg-[#111111] relative overflow-hidden">
      {/* Data visualization background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {dataPoints.current.map((point, i) => (
          <div
            key={i}
            className="absolute animate-pulse-slow"
            style={{
              top: `${point.y}%`,
              left: `${point.x}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              backgroundColor: point.color,
              borderRadius: '50%',
              boxShadow: `0 0 ${point.size * 2}px ${point.color}`,
              animationDelay: `${point.delay}s`,
              animationDuration: '4s'
            }}
          ></div>
        ))}
        
        {/* Data flow lines */}
        {[...Array(15)].map((_, i) => {
          const startY = Math.random() * 100;
          const startX = Math.random() * 100;
          const length = 20 + Math.random() * 40;
          const angle = Math.random() * 360;
          
          return (
            <div
              key={`line-${i}`}
              className="absolute opacity-20"
              style={{
                top: `${startY}%`,
                left: `${startX}%`,
                width: `${length}px`,
                height: '1px',
                background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.8), transparent)',
                transform: `rotate(${angle}deg)`,
              }}
            ></div>
          );
        })}
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative overflow-hidden rounded-xl group">
              <img 
                src="/lovable-uploads/277516c8-63e7-42a6-975e-786add466169.png" 
                alt="Shamantak A Nayak" 
                className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/5"></div>
              
              {/* Data Science & ML Animated overlay elements */}
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
                  <BarChart3 className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="absolute bottom-1/3 right-1/4 animate-float-slow" style={{ animationDelay: '1.4s' }}>
                  <PieChart className="w-8 h-8 text-pink-400" />
                </div>
                
                {/* Data flow animation */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px bg-gradient-to-t from-purple-500 to-transparent"
                      style={{
                        left: `${10 + i * 12}%`,
                        height: `${30 + Math.random() * 40}%`,
                        bottom: 0,
                        animation: `growHeight 1.5s ease-out ${i * 0.2}s`
                      }}
                    ></div>
                  ))}
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
                A passionate <span className="text-purple-400 font-medium">Data Scientist</span> and
                <span className="text-blue-400 font-medium"> ML Engineer</span> with specialized 
                expertise in <span className="text-gradient font-medium">Machine Learning</span> and 
                <span className="text-green-400 font-medium"> Artificial Intelligence</span>.
              </p>
              <p>
                I'm deeply focused on the intersection of <span className="text-yellow-400">data science</span> and 
                <span className="text-purple-400"> AI technologies</span>, building intelligent systems that transform
                raw data into predictive insights. My work spans from developing complex neural networks to
                implementing production-ready machine learning pipelines.
              </p>
              <p>
                With expertise in frameworks like <span className="text-yellow-400">TensorFlow</span>, 
                <span className="text-blue-400"> PyTorch</span>, and <span className="text-green-400">scikit-learn</span>,
                I've delivered solutions across a range of domains including computer vision, natural language processing,
                and predictive analytics.
              </p>
              <p>
                My goal is to build AI-driven solutions that are not just technically sophisticated
                but also ethically responsible and business-focused.
              </p>
            </div>
            
            {/* ML/AI Tech icon grid with animations */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: <Brain className="w-6 h-6" />, label: "Deep Learning" },
                { icon: <Database className="w-6 h-6" />, label: "Big Data" },
                { icon: <Cpu className="w-6 h-6" />, label: "Neural Networks" },
                { icon: <Server className="w-6 h-6" />, label: "ML Ops" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:-translate-y-1 cursor-pointer shimmer-border group"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="text-purple-500 mb-2 animate-pulse-slow group-hover:text-purple-400 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-sm text-center">{item.label}</span>
                  
                  {/* Interactive data particles on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-purple-400"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float-slow ${3 + Math.random() * 2}s infinite`,
                          animationDelay: `${Math.random()}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* ML Projects Link */}
            <div className="mt-8">
              <a 
                href="#projects" 
                className="px-6 py-3 border border-purple-500 text-purple-500 rounded-full font-medium hover:bg-purple-500/10 transition-all shimmer-border group flex items-center gap-2 w-fit"
              >
                View AI Projects
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
