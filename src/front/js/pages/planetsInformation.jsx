import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetsInfo = () => {
  const { store, actions } = useContext(Context);
  const { planetid } = useParams();
  useEffect(() => {
    actions.loadDataAllPlanets(planetid);
  }, []);
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
          style={{ maxWidth: "500px" }}
          src={`https://starwars-visualguide.com/assets/img/planets/${planetid}.jpg`}
        />

        <div className="text-white">
          <h1 className="mt-4">{store.planetsData.name || ""}</h1>
          <hr></hr>
          <p className="mt-5">Diameter: {store.planetsData.diameter || ""}</p>
          <p>Gravity: {store.planetsData.gravity}</p>
          <p>Population: {store.planetsData.population}</p>
          <p>Climate: {store.planetsData.climate}</p>
          <p>Terrain: {store.planetsData.terrain}</p>
        </div>
      </div>
    </div>
  );
};

export { PlanetsInfo };
