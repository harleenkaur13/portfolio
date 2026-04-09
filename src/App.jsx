import bgImage from "./assets/bgImage.jpg";
import Spotlight from "./components/Spotlight";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./index.css"

const App = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-fixed min-h-screen text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Spotlight />
      <div className="absolute inset-0 bg-black/80 z-10" />

     <div id="mainContainer" className="h-screen relative z-30 flex flex-col items-center overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
        <section id="home" className="snap-start"><Home /></section>
        <section id="about" className="snap-start"><About /></section>
        <section id="projects" className="snap-start"><Projects /></section>
        <section id="contact" className="snap-start"><Contact /></section>
      </div>
    </div>
  )
}


export default App