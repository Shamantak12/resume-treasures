
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

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

  const achievements = [
    'Awwwards Site of the Day for "Harmonic Exploration" interactive experience',
    'Speaker at Frontend Development Conference on "The Future of Creative Coding"'
  ];

  return (
    <section id="education" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Education & Recognition</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2" />
              Education
            </h3>
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-sm card-hover">
                  <h4 className="text-lg font-semibold">{item.institution}</h4>
                  <p className="text-primary/80 mt-1">{item.degree}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{item.location}</span>
                    </div>
                    <div className="hidden sm:block text-muted-foreground">•</div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M12 1v6m0 0l-4-4m4 4l4-4"></path>
                <path d="M21 12a9 9 0 1 1-9-9"></path>
              </svg>
              Awards & Recognition
            </h3>
            
            <div className="bg-white rounded-xl p-6 border border-border shadow-sm h-full card-hover">
              <ul className="space-y-6">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex">
                    <div className="mr-4 mt-1">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-foreground/80">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
