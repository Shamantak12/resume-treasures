
import { Check } from 'lucide-react';

const Skills = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'Three.js', 'WebGL',
    'UI/UX Design', 'Motion Design', 'Interaction Design', 
    'Figma', 'Adobe Creative Suite', 'GSAP', 'Framer Motion'
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-heading">Skills</h2>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex items-center animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.05 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary mr-3">
                <Check className="h-3 w-3" />
              </div>
              <span className="text-foreground/90">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
