
const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-6 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/2 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src="/lovable-uploads/277516c8-63e7-42a6-975e-786add466169.png" 
                alt="Shamantak A Nayak" 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              About Me
            </h2>
            
            <div className="w-16 h-1 bg-purple-500 mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}></div>
            
            <div className="space-y-4 text-gray-300 animate-fade-in opacity-0" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <p>
                A passionate Jr. Full Stack Developer with experience in web development and 
                machine learning. I specialize in creating efficient, user-friendly applications 
                and exploring the frontiers of AI technology.
              </p>
              <p>
                I've worked on various projects from developing social media applications to 
                implementing machine learning models for predicting chronic diseases.
              </p>
              <p>
                My goal is to create intuitive digital experiences that solve real-world problems
                while continuously expanding my knowledge in emerging technologies.
              </p>
            </div>
            
            <div className="mt-8 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-purple-500 text-purple-500 rounded-full font-medium hover:bg-purple-500/10 transition-all"
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
