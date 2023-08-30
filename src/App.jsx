import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personnages" element={<Personnages />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
