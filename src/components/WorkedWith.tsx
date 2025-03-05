
import React, { useEffect, useState } from 'react';
import { Building, ExternalLink, Star, CheckCircle2 } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const WorkedWith = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on mount
    setIsVisible(true);

    // Auto rotate featured companies
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % companies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const companies = [
    {
      name: "Vexora",
      logo: "/lovable-uploads/vexora-logo.png",
      description: "Collaborated on advanced ML algorithms for predictive analytics platforms, focusing on time series forecasting and anomaly detection systems.",
      role: "ML Engineer",
      technologies: ["TensorFlow", "Python", "AWS SageMaker", "Kafka"],
      color: "#6366f1" // Indigo
    },
    {
      name: "YEUI",
      logo: "/lovable-uploads/yeui-logo.png",
      description: "Developed intelligent UI systems with computer vision integration, enabling context-aware interface adaptations and user behavior prediction.",
      role: "AI Solutions Architect",
      technologies: ["PyTorch", "React", "Computer Vision", "NLP"],
      color: "#ec4899" // Pink
    },
    {
      name: "Seeni",
      logo: "/lovable-uploads/seeni-logo.png",
      description: "Implemented data processing pipelines and deep learning models for automated data extraction and document classification systems.",
      role: "Data Scientist",
      technologies: ["scikit-learn", "Pandas", "SQL", "Docker"],
      color: "#10b981" // Emerald
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="py-20 px-6 relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '24px 24px'
            }}
          ></div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Collaborated <span className="text-gradient">With</span>
            </h1>
            <p className={`text-xl text-center max-w-2xl mx-auto text-gray-300 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Partnering with forward-thinking companies to build AI-driven solutions that solve complex problems through data and machine learning
            </p>

            {/* Data visualization element */}
            <div className="flex justify-center mb-16">
              <div className="relative w-full max-w-lg h-12">
                {companies.map((company, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full flex items-center transition-all duration-700 rounded-lg overflow-hidden ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    style={{
                      background: `linear-gradient(90deg, ${company.color}40 0%, ${company.color}00 100%)`,
                      width: `${(index + 1) * 33}%`
                    }}
                  >
                    <div 
                      className="h-full" 
                      style={{
                        width: '100%', 
                        background: company.color,
                        opacity: 0.2,
                        animation: 'growWidth 2s ease-in-out'
                      }}
                    ></div>
                    <span 
                      className="absolute right-2 text-xs font-mono"
                      style={{ color: company.color }}
                    >
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating data particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float-slow"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${8 + Math.random() * 10}s`
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full opacity-30"
                  style={{ 
                    backgroundColor: companies[i % companies.length].color,
                    boxShadow: `0 0 10px ${companies[i % companies.length].color}`
                  }}
                ></div>
              </div>
            ))}
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-12">
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center gap-8 p-6 rounded-xl transition-all duration-1000 shimmer-border animate-fade-in opacity-0`}
                  style={{ 
                    animationDelay: `${0.3 * index}s`, 
                    animationFillMode: 'forwards',
                    backgroundColor: `${company.color}10` 
                  }}
                >
                  {/* Company Logo Container */}
                  <div className="w-full md:w-2/5 relative">
                    <div className="aspect-video rounded-lg overflow-hidden relative group">
                      <div 
                        className="absolute inset-0 opacity-10 bg-gradient-to-br"
                        style={{ backgroundImage: `radial-gradient(circle, ${company.color} 0%, transparent 70%)` }}
                      ></div>
                      
                      <div className="flex items-center justify-center h-full">
                        <div 
                          className="w-48 h-48 flex items-center justify-center relative z-10 p-6 rounded-xl transition-transform group-hover:scale-110 duration-500"
                          style={{ backgroundColor: `${company.color}20` }}
                        >
                          <div className="text-5xl font-bold" style={{ color: company.color }}>
                            {company.name}
                          </div>
                          
                          {/* Binary/data pattern overlay */}
                          <div className="absolute inset-0 overflow-hidden opacity-20">
                            <div className="font-mono text-xs" style={{ color: company.color }}>
                              {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-full">
                                  {[...Array(30)].map((_, j) => (
                                    <span key={j} className="inline-block">
                                      {Math.random() > 0.5 ? '1' : '0'}
                                    </span>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tech Icons */}
                      <Star 
                        className="absolute top-5 left-10 w-6 h-6 animate-pulse-slow" 
                        style={{ color: company.color, animationDelay: '0.5s' }} 
                      />
                      <CheckCircle2 
                        className="absolute bottom-10 right-16 w-5 h-5 animate-pulse-slow" 
                        style={{ color: company.color, animationDelay: '1s' }} 
                      />
                      <Building 
                        className="absolute top-1/2 right-10 w-7 h-7 animate-pulse-slow" 
                        style={{ color: company.color, animationDelay: '1.5s' }} 
                      />
                    </div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="w-full md:w-3/5">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold">{company.name}</h3>
                      <div 
                        className="px-3 py-1 text-xs font-medium rounded-full" 
                        style={{ backgroundColor: `${company.color}20`, color: company.color }}
                      >
                        {company.role}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{company.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {company.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs rounded-full"
                          style={{ backgroundColor: `${company.color}20`, color: company.color }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
                      style={{ color: company.color }}
                    >
                      <span>Learn more about this collaboration</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* ML Stats Section */}
        <section className="py-16 px-6 relative">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Impact <span className="text-gradient">Metrics</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "98.7%", label: "Model Accuracy", color: "#6366f1" },
                { value: "3.2M", label: "Data Points Processed", color: "#ec4899" },
                { value: "47%", label: "Performance Improvement", color: "#10b981" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/30 p-6 rounded-xl text-center relative overflow-hidden shimmer-border animate-fade-in opacity-0"
                  style={{ animationDelay: `${0.3 * index}s`, animationFillMode: 'forwards' }}
                >
                  <div className="relative z-10">
                    <h3 
                      className="text-4xl font-bold mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </h3>
                    <p className="text-gray-300">{stat.label}</p>
                  </div>
                  
                  {/* Background Pattern */}
                  <div 
                    className="absolute top-0 left-0 w-full h-full opacity-5"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${stat.color} 0%, transparent 70%)`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Flow Lines */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
            {[...Array(10)].map((_, i) => {
              const startX = Math.random() * 100;
              const endX = Math.random() * 100;
              return (
                <div
                  key={i}
                  className="absolute h-px animate-pulse-slow"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${startX}%`,
                    width: `${Math.abs(endX - startX)}%`,
                    backgroundColor: `hsl(${Math.random() * 360}, 100%, 70%)`,
                    animationDuration: `${5 + Math.random() * 5}s`
                  }}
                ></div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default WorkedWith;
