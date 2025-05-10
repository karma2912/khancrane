import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Page1 from "./components/pages/Page1";
import Page2 from "./components/pages/Page2";
import Page3 from "./components/pages/Page3";
import Page4 from "./components/pages/Page4";
import Services from "./components/routes/Services";
import AboutUs from "./components/routes/AboutUs";
import Contact from "./components/routes/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          key="home"
          element={
            <>
              <Navbar />
              <Page1 />
              <Page2 />
              <Page3 />
              <Page4 />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          key="services"
          element={
            <>
              <Navbar />
              <Services />

              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          key="about"
          element={
            <>
              <Navbar />
              <AboutUs />

              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          key="contact"
          element={
            <>
              <Navbar />
              <Contact />

              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
