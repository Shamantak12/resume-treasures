
const Education = () => {
  const education = [
    {
      institution: 'Design & Interactive Media Institute',
      degree: 'Master\'s in Interactive Design',
      location: 'Paris, France',
      period: '2015 - 2017'
    },
    {
      institution: 'University of Digital Arts',
      degree: 'Bachelor\'s in Computer Science & Visual Design',
      location: 'Lyon, France',
      period: '2012 - 2015'
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-heading">Education</h2>
        
        <div className="mt-16 space-y-12">
          {education.map((item, index) => (
            <div 
              key={index} 
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-12">
                <div className="w-full md:w-1/3">
                  <p className="text-muted-foreground text-sm">{item.period}</p>
                </div>
                
                <div className="w-full md:w-2/3 mt-2 md:mt-0">
                  <h3 className="text-xl font-bold">{item.institution}</h3>
                  <p className="text-primary/80 mb-2">{item.degree}</p>
                  <p className="text-foreground/80">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
