
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Home from "../components/home";
import Navbar from "../components/navbar";
import Projects from "../components/project";
import Skills from "../components/Skills";

export default function App() {
  return (
   
      <div className="font-sans bg-gray-50 text-gray-800">
        <Navbar />
        <Home/>
        <Skills/>
        <Projects/>
        <About/>
        <Contact/>
         <Footer />
      </div>

  );
}
