import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/contact/Contact";
import Register from "./pages/auth/Register";
import ApiFecthTesting from "./components/ApiFecthTesting";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="apifecthtesting" element={<ApiFecthTesting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
