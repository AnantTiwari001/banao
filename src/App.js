import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import {
  Header,
  Footer,
  About,
  Services,
  Team,
  Media,
  Contact,
  Clients,
  Home,
  Test,
  Privacy
} from "./components";
import ParallexComponent from "./components/ParallexComponent";
import image from './assets/Image 3 (About Us page).jpeg'
import Preload from "./components/Preload";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="parallex" element={<Preload/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/test" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Clients />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="teams" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
