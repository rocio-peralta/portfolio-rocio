import About from './components/About';
import ContactLinks from './components/ContactLinks';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function App() {
  return (
    <>
      <div className="ml-52 mr-52 mt-20">
        <Navbar />
        <Hero />
        <About />
        <h2 id="projects" className="section-title">
          Projects
        </h2>
        <Projects />
        <div className="background" />
        <h2 id="contact" className="section-title">
          Contact me!
        </h2>
        <ContactLinks />
        <Footer />
      </div>
    </>
  );
}
