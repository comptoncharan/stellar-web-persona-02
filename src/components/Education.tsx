import { GraduationCap, Award, ExternalLink } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Full Stack Developer Certificate",
      institution: "Toronto Metropolitan University",
      year: "2024",
      description: "Comprehensive program covering modern web development technologies and practices"
    }
  ];

  // Replace # with your certificate URLs (e.g. freeCodeCamp: https://freecodecamp.org/certification/yourusername/cert-name)
  const certifications = [
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
      link: "#"
    },
    {
      name: "JavaScript Algorithms & Data Structures",
      issuer: "freeCodeCamp",
      year: "2023",
      link: "#"
    },
    {
      name: "Full Stack Development",
      issuer: "freeCodeCamp",
      year: "2024",
      link: "#"
    },
    {
      name: "PC Repair & IT Fundamentals",
      issuer: "Professional Certification",
      year: "2020",
      link: "#"
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Education</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-mono text-primary">{edu.year}</span>
                <h4 className="text-xl font-display font-bold mt-2">{edu.degree}</h4>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mt-3">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-bold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.year}</p>
                  </div>
                  <a 
                    href={cert.link}
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={16} className="text-primary" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
