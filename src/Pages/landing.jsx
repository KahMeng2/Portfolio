import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Projects from "../Components/Projects";



const LandingPage = () => {
  return (
    <div >
        <Navbar/>
        <main className="pt-[calc(2rem)] "> {/* Adjust padding as needed */}
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
      </main>
    </div>
    
  );
};
export default LandingPage;
