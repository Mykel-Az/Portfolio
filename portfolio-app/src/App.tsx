import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Layout>
      <Socials />
      <Hero />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default App;