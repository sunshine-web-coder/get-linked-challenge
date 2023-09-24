import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/contact/Contact";
import Register from "./pages/auth/Register";
import Timeline from "./pages/timeline/Timeline";
import Faqs from "./pages/faqs/Faqs";
import Overview from "./pages/overview/Overview";
import PrivacyPolicyAndTerms from "./pages/privacyPolicy.jsx/PrivacyPolicyAndTerms";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy-and-terms" element={<PrivacyPolicyAndTerms />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
