import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import MissionStatement from "./components/MissionStatement";
import Why from "./components/Why";
import How from "./components/How";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Connect from "./components/Connect";

import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MissionStatement/>
              <Why />
              <How />
              <Pricing />
              <About />
              <Connect />
            </>
          }
        />

        {/* PAGES */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;