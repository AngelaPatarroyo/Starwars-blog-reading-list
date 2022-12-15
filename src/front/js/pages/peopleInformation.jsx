import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PeopleInfo = () => {
  const { store, actions } = useContext(Context);
  const { peopleid } = useParams();
  useEffect(() => {
    actions.loadDataAllPeople(peopleid);
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
          src={`https://starwars-visualguide.com/assets/img/characters/${peopleid}.jpg`}
          onError={(e) => imgError(e)}
        />
        <div className="text-white">
          <h1 className="mt-4">{store.peopleData.name || ""}</h1>
          <hr></hr>
          <p className="mt-5">Height: {store.peopleData.height}</p>
          <p>Gender: {store.peopleData.gender}</p>
          <p>Hair Color: {store.peopleData.hair_color}</p>
          <p>Eye Color: {store.peopleData.eye_color}</p>
          <p>Birth Year: {store.peopleData.birth_year}</p>
        </div>
      </div>
    </div>
  );
};

export { PeopleInfo };
