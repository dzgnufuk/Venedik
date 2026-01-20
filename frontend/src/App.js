import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import SpecialOffers from "./components/SpecialOffers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Menu />
      <SpecialOffers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
