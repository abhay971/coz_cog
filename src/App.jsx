import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Equipment from "./components/Equipment";
import Stats from "./components/Stats";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <Equipment />
      {/* <Stats /> */}
      <Services />
      {/* <CTA /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
