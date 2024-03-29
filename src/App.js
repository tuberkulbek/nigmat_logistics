import "./assets/css/main.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Do from "./components/Do/Do";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";
import logo from "./assets/images/wpp.png"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/do"} element={<Do />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=77079520550" rel="noreferrer" target="_blank"><img src={logo} alt="whatsapp" className="logo_wpp"/></a>
    </div>
  );
}

export default App;
