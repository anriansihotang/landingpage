// import logo from "./logo.svg";
import "./App.css";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Main from "./pages/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
library.add(fab, faInstagram, faSquareFacebook, faTiktok);

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
