import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Medical Alert App",
      description: "A UX-focused concept application designed to provide critical medical alerts and emergency notifications to users and their caregivers.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      tech: ["React", "Tailwind CSS", "UX Design", "Accessibility"],
      features: ["Emergency notifications", "Caregiver dashboard", "Health monitoring"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "School Rank App",
      description: "Education-focused data application that aggregates and displays school performance metrics, helping parents make informed decisions.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      tech: ["Python", "Flask", "PostgreSQL", "Chart.js"],
      features: ["Data visualization", "Search & filter", "Comparative analysis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "RPG Creature Search",
      description: "An API-based JavaScript application that allows users to search and explore creatures from popular RPG games with detailed stats.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
      tech: ["JavaScript", "REST API", "CSS3", "Local Storage"],
      features: ["API integration", "Dynamic filtering", "Favorites system"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my skills through real-world applications and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="p-2 rounded-full bg-primary/20 backdrop-blur-sm text-foreground hover:bg-primary/40 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="p-2 rounded-full bg-primary/20 backdrop-blur-sm text-foreground hover:bg-primary/40 transition-colors"
                      aria-label="View source code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-xs font-mono text-primary uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
