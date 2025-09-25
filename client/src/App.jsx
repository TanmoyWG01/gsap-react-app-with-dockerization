import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";
import Art from "./components/Art";
import Manu from "./components/Manu";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Manu />
      <Contact />
      {/* <div className="h-dvh bg-black"></div> */}
    </main>
  );
}

export default App;
