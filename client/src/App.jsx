import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Model from './component/model.jsx';
import Home from "../src/pages/home/index.jsx";
import Hero from './pages/hero/hero.jsx';
import About from './pages/about/about.jsx';
import { ImageProvider } from './context/imageProvider.jsx';

import Menu from './component/menu.jsx';
import Gallary from "./pages/gallary/gallary.jsx";

function App() {
  return (
    <React.StrictMode>
      <ImageProvider>
        <Router>
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/Gallary" element={<Gallary />} />
            <Route path="/Models" element={<Model />} />
          </Routes>
        </Router>
      </ImageProvider>
    </React.StrictMode>
  );
}

export default App;
