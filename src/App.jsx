import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactForm from "./components/Contactus/Contactform";
import Industries from "./components/Industries/Industries";

const Home = () => (
  <>
    <Hero />
    <Brands />
    {/* <Services /> */}
    <Banner />
    <Banner2 />
    <Testimonial />
    <Newsletter />
  </>
);

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/industries" element={<Industries/> } />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
