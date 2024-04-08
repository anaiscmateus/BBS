import Home from "./pages/Home";
import About from "./pages/About";
import Assessment from "./pages/Assessment";
import Contact from "./pages/Contact";
import How from "./pages/How";
import Portfolio from "./pages/Portfolio";
import Support from "./pages/Support";
import Team from "./pages/Team";
import Footer from "./components/Footer";
import PrimaryNav from "./components/PrimaryNav";
import Why from "./pages/Why";
import Community from "./pages/Community";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <PrimaryNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/how" element={<How />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/support" element={<Support />} />
          <Route path="/team" element={<Team />} />
          <Route path="/why" element={<Why />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
