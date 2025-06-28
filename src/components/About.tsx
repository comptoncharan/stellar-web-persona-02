
import { Code2, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js"
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "UI/UX Design",
      description: "Figma, Adobe Creative Suite, User Research"
    },
    {
      icon: <Rocket className="h-8 w-8 text-green-600" />,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a creative developer with 5+ years of experience building digital products 
            that users love. I combine technical expertise with design thinking to create 
            exceptional user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {skill.title}
              </h3>
              <p className="text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h3>
          <p className="text-xl opacity-90 mb-6">
            I'm always excited to work on new projects and collaborate with great people.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-200">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
