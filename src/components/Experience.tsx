import { Code, Rocket, FolderGit2, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Personal Projects & Freelance",
      period: "2023 – Present",
      highlights: [
        "Built responsive web applications using React, TypeScript, and Tailwind CSS",
        "Developed full-stack solutions with Flask and Python backends",
        "Implemented AI-assisted workflows to accelerate development"
      ]
    },
    {
      title: "Full Stack Web Development",
      company: "Toronto Metropolitan University",
      period: "2023 – 2024",
      highlights: [
        "Completed comprehensive certification in modern web development",
        "Built portfolio projects including healthcare and education platforms",
        "Mastered React, JavaScript, Python, and responsive design principles"
      ]
    },
    {
      title: "Self-Taught Developer",
      company: "Online Learning & Practice",
      period: "2022 – 2023",
      highlights: [
        "Learned HTML, CSS, JavaScript fundamentals through hands-on projects",
        "Explored modern frameworks and development tools",
        "Contributed to open-source projects and coding communities"
      ]
    }
  ];

  const stats = [
    { icon: <FolderGit2 className="h-5 w-5" />, value: "5+", label: "Projects Built" },
    { icon: <Code className="h-5 w-5" />, value: "6+", label: "Technologies" },
    { icon: <Rocket className="h-5 w-5" />, value: "100%", label: "Passion Driven" },
    { icon: <GraduationCap className="h-5 w-5" />, value: "1", label: "Certification" }
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Development <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transitioning from operations leadership to full-stack development
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border border-border text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 animate-fade-in ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10" />
              
              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <span className="text-sm font-mono text-primary">{exp.period}</span>
                  <h3 className="text-xl font-display font-bold mt-2">{exp.title}</h3>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
