import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <Layout>
      {/* Desktop Socials (fixed position) */}
      <div className="hidden md:block">
        <Socials isFixed={true} />
      </div>
      
      <Hero />
      <Skills />
      <Projects />
      
      {/* Mobile Socials (static position) */}
      <div className="md:hidden py-6 px-4">
        <h2 className="text-3xl font-bold text-purple-700 mb-2 text-center">Links</h2>
        <hr className="border-t-2 border-amber-500 w-40 mb-8 mx-auto" />
        <Socials isFixed={false} />
      </div>
      
      <Footer />
    </Layout>
  );
}

export default Portfolio;



//  (
//     <Layout>
//       <div className="hidden md:block">
//         <Socials />
//       </div>
//       <Hero />
//       <Skills />
//       <Projects />
//       <div className="md:hidden">
//         <Socials />
//       </div>
//       <Footer />
//     </Layout>
//   );