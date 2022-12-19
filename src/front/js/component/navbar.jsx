import React, { useContext } from "react";
import Starwars from "../../img/starwars.png";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-black">
      <nav
        className="navbar navbar-expand-lg bg-black content-fluid"
        style={{ fontSize: "1.5rem" }}
      >
        <Link to="/">
          <img
            className="ms-5"
            src={Starwars}
            style={{ width: "5rem", height: "3rem" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" className="nav-link text-white" href="#">
                Planets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/films" className="nav-link text-white" href="#">
                Films
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/people" className="nav-link text-white" href="#">
                Characters
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/species" className="nav-link text-white" href="#">
                Species
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/starships" className="nav-link text-white" href="#">
                Starships
              </Link>
            </li>
            <li className="nav-item">
              <Link to="vehicles" className="nav-link text-white" href="#">
                Vehicles
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <li className="nav-item dropdown d-flex align-items-center me-5">
        <a
          className="nav-link dropdown-toggle text-white "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favourites
        </a>

        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          aria-current="true"
        >
          {store.favoritos.map((element, index) => {
            return (
              <li key={index}>
                {element.name} {"("} {element.type}
                {")"}
              </li>
            );
          })}
        </ul>
      </li>
    </nav>
  );
};
