import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  function handleFavoritos(data) {
    let favoritoIndex = store.favoritos.findIndex(
      (fav) => fav.link == data.link
    );
    if (favoritoIndex == -1) {
      actions.addFavoritos(data);
    } else {
      actions.removeFavoritos(favoritoIndex);
    }
  }
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
              : props?.type === "films"
              ? `https://starwars-visualguide.com/assets/img/films/${props.uid}.jpg`
              : props?.type === "species"
              ? `https://starwars-visualguide.com/assets/img/species/${props.uid}.jpg`
              : props?.type === "starships"
              ? `https://starwars-visualguide.com/assets/img/starships/${props.uid}.jpg`
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
                : props.type === "species"
                ? `/species/${props.uid}`
                : props.type === "starships"
                ? `/starships/${props.uid}`
                : `/vehicles/${props.uid}`
            }
            className="btn btn-dark"
          >
            Learn More
          </Link>

          <button
            onClick={() =>
              handleFavoritos(
                actions.addFavoritos({
                  name: props.name,
                  link: `/${props.type}/${props.uid}`,
                })
              )
            }
            className="btn btn-dark ms-3"
          >
            <i className="bi bi-heart-fill" />
          </button>
        </div>
      </div>
    </div>
  );
};
