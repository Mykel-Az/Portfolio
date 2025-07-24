import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <Layout>
      <Socials />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </Layout>
  );
}

export default Portfolio;