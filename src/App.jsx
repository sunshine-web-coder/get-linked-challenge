import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import TimelinePage from "./components/TimelinePage";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline_page" element={<TimelinePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
