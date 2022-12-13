import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div>
      <div
        className="card border border-light text-center d-flex m-3"
        style={{ width: "100" }}
      >
        <img
          src={
            props?.type === "planets"
              ? `https://starwars-visualguide.com/assets/img/planets/${props.uid}.jpg`
              : props?.type === "people"
              ? `https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`
              : `https://starwars-visualguide.com/assets/img/vehicles/${props.uid}.jpg`
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <Link
            to={
              props.type === "planets"
                ? `/planets/${props.uid}`
                : props.type === "people"
                ? `/people/${props.uid}`
                : `/vehicles/${props.uid}`
            }
            className="btn btn-dark"
          >
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
