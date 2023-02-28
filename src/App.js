import "./assets/css/main.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Do from "./components/Do/Do";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/do"} element={<Do />} />
        <Route path={"/contact"} element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
