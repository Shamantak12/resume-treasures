
import { ArrowUpRight, Github, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Immersive Product Experience',
      period: 'January 2023',
      description: '3D interactive product showcase with WebGL and Three.js. Users can explore the product from all angles with custom lighting and materials. Optimized for performance across devices.',
      technologies: ['Three.js', 'WebGL', 'GSAP', 'JavaScript', 'React'],
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Portfolio for Digital Artist',
      period: 'October 2022',
      description: 'Custom-designed portfolio with advanced animations and transitions. Features a unique navigation system and interactive gallery. Responsive design with focus on showcasing visual work.',
      technologies: ['React', 'Framer Motion', 'TailwindCSS', 'Canvas API'],
      image: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Interactive Data Visualization',
      period: 'June 2022',
      description: 'Created an engaging data visualization project that transforms complex statistics into an interactive storytelling experience. Users can explore different data sets through intuitive controls and animated transitions.',
      technologies: ['D3.js', 'SVG Animation', 'React', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=450'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="section-heading">Selected Projects</h2>
        
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
