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
        <h2
          id="projects"
          className="section-title font-camphor font-open-sans font-segoe-ui mt-10 pt-10 text-center font-sans text-3xl font-medium text-grey"
        >
          Projects
        </h2>
        <div className="mx-auto mt-8 block h-0 w-12 border-4 border-solid border-purple"></div>
        <Projects />
        <div className="background" />
        <h2
          id="contact"
          className="section-title font-camphor font-open-sans font-segoe-ui mt-10 pt-10 text-center font-sans text-3xl font-medium text-grey"
        >
          Contact me!
        </h2>
        <div className="mx-auto mt-8 block h-0 w-12 border-4 border-solid border-purple"></div>
        <ContactLinks />
        <Footer />
      </div>
    </>
  );
}
