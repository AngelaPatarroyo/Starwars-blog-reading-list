import React from "react";
import Starwars from "../../img/starwars.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-black">
      <nav className="navbar navbar-expand-lg bg-black content-fluid">
        <img
          className="ms-5"
          src={Starwars}
          style={{ width: "5rem", height: "3rem" }}
        />

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
              <a
                className="nav-link active text-white ms-3"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Planets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Films
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Species
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Starships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Vehicles
              </a>
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
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
        </ul>
      </li>
    </nav>
  );
};
