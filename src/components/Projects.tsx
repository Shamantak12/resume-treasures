
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Immersive Product Experience',
      description: '3D interactive product showcase with WebGL and Three.js. Users can explore the product from all angles with custom lighting and materials.',
      technologies: ['Three.js', 'WebGL', 'GSAP', 'JavaScript'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Portfolio for Digital Artist',
      description: 'Custom-designed portfolio with advanced animations and transitions. Features a unique navigation system and interactive gallery.',
      technologies: ['React', 'Framer Motion', 'TailwindCSS'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1478476868527-002ae3f3e159?auto=format&fit=crop&q=80&w=800&h=450'
    },
    {
      title: 'Interactive Data Visualization',
      description: 'Created an engaging data visualization project that transforms complex statistics into an interactive storytelling experience.',
      technologies: ['D3.js', 'SVG Animation', 'React'],
      link: '#',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=450'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="section-heading">Selected Projects</h2>
        
        <div className="mt-16 space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 md:gap-12 animate-fade-in opacity-0"
              style={{ animationDelay: `${0.2 * index}s`, animationFillMode: 'forwards' }}
            >
              <div className="w-full md:w-1/2 h-64 md:h-80 rounded-lg overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-foreground/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-sm text-foreground/60 bg-muted px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="flex items-center text-primary font-medium group w-fit"
                >
                  <span>View Project</span>
                  <ArrowUpRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
