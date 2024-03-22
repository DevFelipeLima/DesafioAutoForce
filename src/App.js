import "./App.css";
import About from "./components/About";
import BreadCrumb from "./components/BreadCrumb";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BreadCrumb />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
