
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Creative Developer',
      company: 'Digital Studio',
      period: 'Jan 2022 - Present',
      description: [
        'Lead developer on interactive web experiences for major brands',
        'Specialized in 3D web animations and immersive experiences using Three.js',
        'Mentored junior developers on creative coding techniques'
      ]
    },
    {
      role: 'Creative Developer',
      company: 'Interactive Agency',
      period: 'Mar 2019 - Dec 2021',
      description: [
        'Developed award-winning interactive websites with focus on performance and animation',
        'Collaborated with designers to implement complex UI interactions',
        'Created custom WebGL shaders for unique visual effects'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Tech Startup',
      period: 'Jun 2017 - Feb 2019',
      description: [
        'Built responsive web applications using React and modern JavaScript',
        'Implemented animation systems for enhanced user experience',
        'Worked in an agile environment with rapid iteration cycles'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="mt-16">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="timeline-item animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mb-3">
                <h3 className="text-xl font-bold">
                  {exp.role} | {exp.company}
                </h3>
                
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-foreground/80">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/70 mt-2 mr-2"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
