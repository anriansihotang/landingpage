// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Product from "./components/Product";
import Best from "./components/bestproduct";
import Ziggity from "./components/Ziggity";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Partners from "./components/partners";
library.add(
  fab,
  faInstagram,
  faSquareFacebook,
  faTiktok,
  faCheck,
  faChevronDown
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Product />	
      <Best />
      <Partners />
      <Ziggity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
