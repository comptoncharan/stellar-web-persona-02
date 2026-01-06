import { Monitor, Server, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "jQuery", "Tailwind CSS"]
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backend",
      skills: ["Python", "Flask", "REST APIs", "Node.js"]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "SQL"]
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Tools & Practices",
      skills: ["Git", "GitHub", "VS Code", "AI Assistants", "Agile", "QA Testing"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-lg font-display font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
