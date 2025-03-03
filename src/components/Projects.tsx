
import { ArrowUpRight, Github, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ilava (Farmers Application Model)',
      period: 'September 2024 - Present',
      description: 'Ilava is an application made to get the information about the soil content like nitrogen, phosphorous, etc. The platform uses a Stable Diffusion Model for image-based predictions and machine learning models for crop water consumption forecasting. Selected for the FAER Funding Programme.',
      technologies: ['HTML', 'Tailwind', 'JavaScript', 'Python', 'Stable Diffusion', 'Machine Learning', 'PostgreSQL'],
      link: 'LINK',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Autism Spectrum Disorder',
      period: 'May 2024 - August 2024',
      description: 'Managed the development of SVM and Logistic Regression models to predict Autism Spectrum Disorder, achieving a high accuracy rate and surpassing industry benchmarks by pre-processing data. Enhanced early detection outcomes by improving diagnostic accuracy, positively impacting the timely intervention for individuals with ASD.',
      technologies: ['Python', 'SVM', 'Logistic Regression', 'Pandas', 'Streamlit', 'Seaborn', 'Machine Learning'],
      link: 'LINK',
      image: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Vitara (Social Media Application)',
      period: 'Oct 2023 - Dec 2023',
      description: 'Built with Next.js, the application offers an intuitive and engaging user interface that makes it easy for family members to interact and connect. By utilizing the Gale-Shapley algorithm, Vitara helps family members connect with one another based on mutual trust and shared interests. Developed using Node.js and a REST API, ensuring seamless communication between the client and server.',
      technologies: ['Next.js', 'Node.js', 'REST API', 'MongoDB', 'Machine Learning'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=450'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-fade-in opacity-0 card-hover"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Visit ${project.title} project`}
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">{project.period}</p>
                  <p className="text-foreground/80 text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="skill-chip">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="skill-chip">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
