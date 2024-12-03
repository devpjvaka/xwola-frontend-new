import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ContactForm from "./components/Contactus/Contactform";
import Industries from "./components/Industries/Industries";
import ScrollToTop from "./components/scrollTop"; // Adjust path if needed
import GetStarted from "./components/Hero/GetStarted/getStarted";
import SoftwareDevelopment from "./components/Services/catogeries/softwareDevelopment/softwaredevelopment";
import Telicommunications from "./components/Industries/pages/telicommunications/telicommunications";
import Retail from "./components/Industries/pages/retail/retail";
import EventsAndHospitality from "./components/Industries/pages/events&hospitatily/events&hospitatily";
import Team from "./components/Banner/team";

import SupportMaintanace from "./components/Services/catogeries/supportMaintance/supportmaintanace";
import Seo from "./components/Services/catogeries/seo/seo";
import Ai from "./components/Services/catogeries/ai/ai";


const Home = () => (
  <>
    <Hero />
    <Brands />
    <Banner />
    <Banner2 />
    <Testimonial />
    <Newsletter />
  </>
);

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures each route change scrolls to top */}
      <main className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactForm />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/getStarted" element={<GetStarted />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
          <Route path="/telicommunications" element={<Telicommunications/>} />
          <Route path="/retail" element={<Retail/>} />
          <Route path="/events&hospitatily" element={<EventsAndHospitality/>} />
          <Route path="/team" element={<Team/>} />
          
          <Route path="/supportmaintanace" element={<SupportMaintanace />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/ai" element={<Ai />} />


        </Routes>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
