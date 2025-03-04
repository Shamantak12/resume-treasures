
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'SQL', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Frameworks',
      skills: ['React.js', 'Angular', 'Express', 'Node.js', 'Next.js']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Power BI', 'MySQL', 'MongoDB', 'PostgreSQL', 'Docker', 'Git', 'REST API']
    }
  ];

  const renderSkillBars = (skills: string[]) => {
    return skills.map((skill, i) => (
      <div key={i} className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-300">{skill}</span>
          <span className="text-xs text-gray-400">
            {85 - i * 5}%
          </span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-500 rounded-full" 
            style={{ 
              width: `${85 - i * 5}%`,
              animation: `growWidth 1.5s ease-out forwards`,
              animationDelay: `${0.2 * i}s`
            }}
          ></div>
        </div>
      </div>
    ));
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-6 lg:px-8 bg-[#0E0E0E]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0 bg-[#111111] rounded-lg p-6 border border-gray-800" 
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-xl font-semibold mb-6 text-purple-400">{category.title}</h3>
              {renderSkillBars(category.skills)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
