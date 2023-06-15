//components
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonails from "./components/Testimonails";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonails />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
