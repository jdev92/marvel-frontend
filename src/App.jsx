import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favoris from "./pages/Favoris";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/character/:characterId" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comic/:comicId" element={<Comic />} />
          <Route path="/favoris" element={<Favoris />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
