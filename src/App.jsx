import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Routes, Route } from "react-router-dom";
import Personas from "./views/Personas";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personas" element={<Personas />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
