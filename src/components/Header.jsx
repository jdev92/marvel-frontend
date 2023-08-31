import { Link } from "react-router-dom";
import logoMarvel from "../assets/marvel-logo.png";
import img from "../assets/marvel-background.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <div className="header-logo">
            <Link to="/">
              <img src={logoMarvel} alt="logo marvel" />
            </Link>
          </div>
          <div className="header-link">
            <Link to="/characters">
              <button>Personnages</button>
            </Link>
            <Link to="/comics">
              <button>Comics</button>
            </Link>
            <Link to="/favoris">
              <button>Favoris</button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
