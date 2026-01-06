import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Compton Shidath Charan | Full Stack Developer</title>
        <meta 
          name="description" 
          content="Full Stack Developer specializing in React, Python, Flask, and modern web technologies. Building responsive, performant web applications with 15+ years of leadership experience." 
        />
        <meta name="keywords" content="Full Stack Developer, React, Python, Flask, JavaScript, Web Development, Guyana" />
        <meta property="og:title" content="Compton Shidath Charan | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer building modern, responsive web applications with clean code and AI-assisted workflows." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://comptoncharan.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Awards />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
