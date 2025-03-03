
const Experience = () => {
  const experiences = [
    {
      role: 'Senior Creative Developer',
      company: 'Digital Studio',
      period: '2022 - Present',
      description: 'Lead developer on interactive web experiences for major brands. Specialized in 3D web animations and immersive experiences using Three.js. Mentored junior developers on creative coding techniques.'
    },
    {
      role: 'Creative Developer',
      company: 'Interactive Agency',
      period: '2019 - 2021',
      description: 'Developed award-winning interactive websites with focus on performance and animation. Collaborated with designers to implement complex UI interactions. Created custom WebGL shaders for unique visual effects.'
    },
    {
      role: 'Frontend Developer',
      company: 'Tech Startup',
      period: '2017 - 2019',
      description: 'Built responsive web applications using React and modern JavaScript. Implemented animation systems for enhanced user experience. Worked in an agile environment with rapid iteration cycles.'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-heading">Experience</h2>
        
        <div className="mt-16 space-y-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                <div className="w-full md:w-1/3">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary/80 mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </div>
                
                <div className="w-full md:w-2/3 mt-4 md:mt-0">
                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
