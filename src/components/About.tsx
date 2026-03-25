import { Code2, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      description: "React, Flask, Python, JavaScript – building end-to-end solutions"
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "AI-Assisted Workflows",
      description: "Leveraging modern AI tools to accelerate development and improve code quality"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Real-World Projects",
      description: "Portfolio of practical applications including healthcare tools, education platforms, and interactive web apps"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Bridging Leadership &{" "}
            <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm an entry-level Full Stack Developer with over 15 years of operations and leadership experience. 
            My technical stack includes <span className="text-primary">HTML, CSS, JavaScript, Python, React, and Flask</span>, 
            with a strong focus on responsive design, performance optimization, and security best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 card-glow animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-xl bg-secondary">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative p-8 md:p-12 rounded-2xl overflow-hidden animate-fade-in">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
          <div className="absolute inset-0 bg-card/80 backdrop-blur-sm" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Contribute & Grow
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I combine technical expertise with proven leadership skills, bringing a unique perspective 
              to software development teams. Let's build something great together.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
