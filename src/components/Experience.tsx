
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Jr. Full Stack Developer',
      company: 'UNIVISUAL CREATIVES',
      period: 'Oct 2024 - Present',
      description: [
        'Increased Clients website speed by 40% by optimizing the code quality',
        'Accelerated Real time data fetching from the client server by using Fast API with limited functionality',
        'Assisted In Designing of the Web by using different framework'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Oasis Infobyte',
      period: 'Sep 2023 - Oct 2023',
      link: 'LINK',
      description: [
        'Led a transformative Capstone project to develop and deploy a cutting-edge food delivery application for company use',
        'Utilized diverse technologies and API integrations to cater to the existing customer base, enhancing user experience and expanding service capabilities',
        'Strategically implemented an upgraded payment gateway to streamline transactions and improve customer satisfaction'
      ]
    },
    {
      role: 'Machine Learning Intern',
      company: 'Varcons Technologies',
      period: 'Oct 2023 - Dec 2023',
      link: 'LINK',
      description: [
        'Developed and implemented Machine Learning algorithms for predicting the risks of chronic diseases',
        'Designed and trained a Machine Learning model to analyze relevant data and make predictions',
        'Worked closely with senior developers to learn best practices in Model development and code optimization'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-[#0E0E0E]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-[#161616] border border-purple-900/20 rounded-lg p-6 shadow-lg shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300 hidden-element"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="mb-3 md:mb-0">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-purple-500" />
                    {exp.role}
                  </h3>
                  <p className="text-lg text-purple-300 font-medium">{exp.company}</p>
                </div>
                
                <div className="flex items-center text-gray-400 bg-[#1A1A1A] px-3 py-1 rounded-full">
                  <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                  <span className="text-sm">{exp.period}</span>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300 mt-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start group">
                    <span className="inline-block h-2 w-2 rounded-full bg-purple-500 mt-2 mr-3 group-hover:bg-purple-400 transition-colors"></span>
                    <span className="group-hover:text-white transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
              
              {exp.link && (
                <a 
                  href={exp.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span className="text-sm font-medium">View project</span>
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
