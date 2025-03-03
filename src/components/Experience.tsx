
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
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="ml-2 text-primary hover:underline text-sm font-normal"
                    >
                      View
                    </a>
                  )}
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
