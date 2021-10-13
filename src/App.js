import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Projects from "./components/projects/Projects";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import Journey from "./components/journey/Journey";
import About from "./components/about/About";
import Credits from "./components/credits/Credits";

function App() {

const [menuOpen, setMenuOPen] = useState(false)
  return (
    <div className="app">

      <Topbar menuOpen={menuOpen} setMenuOPen={setMenuOPen} />
      <Menu menuOpen={menuOpen} setMenuOPen={setMenuOPen} />

      <div className="sections">
      <Intro/>
      <About/>
      <Journey/>
      <Projects/>
      <Credits/>
     </div>

     
    </div>
  );
}

export default App;
