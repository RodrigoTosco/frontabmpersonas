import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
