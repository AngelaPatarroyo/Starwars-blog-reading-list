import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const StarshipsInfo = () => {
  const { store, actions } = useContext(Context);
  const { starshipsid } = useParams();
  useEffect(() => {
    actions.loadDataAllStarships(starshipsid);
  }, []);
  function imgError(e) {
    e.target.src =
      "https://cdn.dribbble.com/users/841405/screenshots/2309412/media/151deca2fce8def92407713a6578d1af.png?compress=1&resize=400x300&vertical=top";
  }
  return (
    <div
      id="cardInfo"
      className="container-fluid d-flex justify-content-center"
    >
      <div
        style={{ backgroundColor: "#222222" }}
        className="d-flex justify-content-start border border-warning col-6 rounded-3"
      >
        <img
          className="rounded-3 me-5"
          style={{ maxWidth: "400px" }}
          src={`https://starwars-visualguide.com/assets/img/starships/${starshipsid}.jpg`}
          onError={(e) => imgError(e)}
        />
        <div className="text-white">
          <h1 className="mt-4">{store.starshipsData.name}</h1>
          <hr></hr>
          <p className="mt-5">Class: {store.starshipsData.starship_class}</p>
          <p>Manufacturer: {store.starshipsData.manufacturer}</p>
          <p>Cost in Credits: {store.starshipsData.cost_in_credits}</p>
          <p>Crew: {store.starshipsData.crew}</p>
          <p>Consumables: {store.starshipsData.consumables}</p>
        </div>
      </div>
    </div>
  );
};

export { StarshipsInfo };
