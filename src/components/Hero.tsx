import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-glow-pulse" style={{
      animationDelay: "1s"
    }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
            <span className="text-sm text-primary font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
            <span className="text-foreground">Hi, I'm</span>
            <br />
            <span className="text-gradient">Compton Shidath Charan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-display">
            Full Stack Developer
          </p>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Building modern, responsive web applications with clean code and AI-assisted workflows. 
            Passionate about creating seamless user experiences, optimizing performance, and leveraging 
            cutting-edge technologies to deliver scalable solutions that make a real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 glow-effect group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-border hover:border-primary hover:bg-primary/10 px-8 py-6 rounded-full transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" aria-label="GitHub">
              <Github size={24} className="text-foreground" />
            </a>
            <a href="https://www.linkedin.com/in/compton-charan-052b37175" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a href="mailto:kidoftheking76@gmail.com" className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110" aria-label="Email">
              <Mail size={24} className="text-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;