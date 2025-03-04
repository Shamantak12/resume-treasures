
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Ilava - Farmers Application',
      description: 'An application to analyze soil content using Stable Diffusion Model and ML for crop water consumption forecasting. Selected for the FAER Funding Programme.',
      technologies: ['React', 'Python', 'Stable Diffusion', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800&h=450',
      github: '#',
      demo: '#'
    },
    {
      title: 'Autism Spectrum Disorder',
      description: 'Developed SVM and Logistic Regression models to predict Autism Spectrum Disorder with high accuracy, enhancing early detection outcomes.',
      technologies: ['Python', 'Machine Learning', 'Streamlit', 'Pandas'],
      image: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&q=80&w=800&h=450',
      github: '#',
      demo: '#'
    },
    {
      title: 'Vitara - Social Media App',
      description: 'A social media platform built with Next.js, featuring the Gale-Shapley algorithm to connect family members based on mutual trust and interests.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'REST API'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=450',
      github: '#',
      demo: '#'
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 md:px-6 lg:px-8 bg-[#111111]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-purple-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 animate-fade-in opacity-0`}
              style={{ animationDelay: `${0.3 * index}s`, animationFillMode: 'forwards' }}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
                />
              </div>
              
              {/* Project Info */}
              <div className="w-full md:w-1/2 md:px-4">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs bg-gray-800 text-purple-400 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-500 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-purple-500 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
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
