
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Java', 'JavaScript']
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Angular', 'Express', 'Node.js', 'Next.js']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Power BI', 'MySQL', 'SQLite', 'Git', 'REST API', 'MongoDB', 'PostgreSQL', 'Docker']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0 overflow-hidden" 
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-xl p-6 border border-border h-full transition-all hover:border-primary/20 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-6 pb-2 border-b border-border">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className="skill-chip flex items-center"
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
