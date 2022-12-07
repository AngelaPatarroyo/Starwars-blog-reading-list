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
    <div>
      <div className="container-fluid d-flex mt-5">
        <div>
          <img
            id="planetaimagen"
            clasName="ms-5"
            style={{ width: "500px" }}
            src="https://starwarsblog.starwars.com/wp-content/uploads/2022/03/inside-intel-coruscant-planet.jpg"
          />
        </div>
        <div className="text-white">
          <h1 id="Planetaname">{store.planetsData.name || ""}</h1>
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
