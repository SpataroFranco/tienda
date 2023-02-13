import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  return (
    <>
      <header className="header-container">
        <div className="header-top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>
          <div className="container-social">
            <FontAwesomeIcon icon={faUser} size="2xl" color="white" />
            <CartWidget />
          </div>
        
        </div>
        <div className="header-button">
          <nav className="nav-container">
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "claseActive" : "claseInactive"
                  }
                  to="/"
                >
                  Inicio
                </NavLink>
              </li>
              <li className="products-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "claseActive" : "claseInactive"
                  }
                  to="/productos/remera"
                >
                  Remeras
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "claseActive" : "claseInactive"
                  }
                  to="/productos/buzo"
                >
                  Buzos
                </NavLink>
              </li>
              <li>
                <a href="/">Nosotros</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
