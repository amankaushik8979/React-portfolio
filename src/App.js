import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Portfolio from "./component/Portfolio";
import SocialLinks from "./component/SocialLinks";

function App() {
  
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience/>
      <Contact />
      <SocialLinks />
    </div>
    
  );
}

export default App;
