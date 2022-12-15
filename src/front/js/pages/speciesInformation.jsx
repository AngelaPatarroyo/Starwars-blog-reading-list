import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const SpeciesInfo = () => {
  const { store, actions } = useContext(Context);
  const { speciesid } = useParams();
  useEffect(() => {
    actions.loadDataAllSpecies(speciesid);
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
          src={`https://starwars-visualguide.com/assets/img/species/${speciesid}.jpg`}
        />
        <div className="text-white">
          <h1 className="mt-4">{store.speciesData.name || ""}</h1>
          <hr></hr>
          <p className="mt-5">Language: {store.speciesData.language}</p>
          <p>Skin Color: {store.speciesData.skin_colors}</p>
          <p>Hair Color: {store.speciesData.hair_colors}</p>
          <p>Eye Color: {store.speciesData.eye_colors}</p>
          <p>Classification: {store.speciesData.classification}</p>
        </div>
      </div>
    </div>
  );
};

export { SpeciesInfo };
