import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portofolio from "./components/Portofolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certification from "./components/Certification";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <About />
      <Experience />
      <Portofolio />
      <Skills />
      <Certification />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
