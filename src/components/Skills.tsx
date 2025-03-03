
const Skills = () => {
  const skillCategories = [
    {
      title: 'Development',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Three.js', 'WebGL']
    },
    {
      title: 'Design',
      skills: ['UI/UX Design', 'Motion Design', 'Interaction Design', 'Prototyping']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Figma', 'Adobe Creative Suite', 'GSAP', 'Framer Motion', 'Blender']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0" 
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-all hover:border-primary/20 hover:-translate-y-1">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border text-primary/80">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="px-4 py-2 bg-primary/5 rounded-full text-primary/80 font-medium hover:bg-primary/10 transition-colors"
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
