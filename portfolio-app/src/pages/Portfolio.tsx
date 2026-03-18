import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Portfolio() {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  );
}
