import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: "kidoftheking76@gmail.com",
      href: "mailto:kidoftheking76@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: "Phone",
      value: "(592) 686-0481",
      href: "tel:+5926860481"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      label: "Location",
      value: "East Coast Demerara, Guyana",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/comptoncharan", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/compton-charan-052b37175", label: "LinkedIn" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:kidoftheking76@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} <${formData.email}>\n\n${formData.message}`)}`;
    window.location.href = mailto;
    toast.success("Opening your email client. Send the message to reach me.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-primary font-mono text-sm tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-display font-bold mb-8">
              Let's Connect
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center gap-4 hover:text-primary transition-colors duration-200"
                    >
                      <div className="p-3 rounded-xl bg-primary/10">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 text-foreground placeholder:text-muted-foreground"
                />
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none text-foreground placeholder:text-muted-foreground"
                />
                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
