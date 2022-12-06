import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div classssName="row justify-content-center">
      <div
        className="card border border-light text-center d-flex m-3"
        style={{ width: "18rem" }}
      >
        <img
          src="https://starwarsblog.starwars.com/wp-content/uploads/2022/03/inside-intel-coruscant-planet.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-title">{props.name}</p>
          <Link to={`/planets/${props.uid}`} className="btn btn-dark">
            Learn More
          </Link>
          <Link to="/" className="btn btn-dark ms-3">
            <i className="bi bi-heart-fill" />
          </Link>
        </div>
      </div>
    </div>
  );
};
