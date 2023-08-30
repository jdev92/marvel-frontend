import { Link } from "react-router-dom";
import logoMarvel from "../assets/marvel-logo.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-logo">
          <Link to="/">
            <img src={logoMarvel} alt="" />
          </Link>
        </div>
        <div className="header-link">
          <Link to="/personnages">
            <button>Personnages</button>
          </Link>
          <Link to="/comics">
            <button>Comics</button>
          </Link>
          <Link to="/favoris">
            <button>Favoris</button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
