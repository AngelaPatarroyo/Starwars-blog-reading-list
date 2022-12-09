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
          <h1>{store.peopleData.name}</h1>
          <p className="mt-5">Height: {store.peopleData.height}</p>
          <p>Gender: {store.peopleData.gender}</p>
          <p>Hair Color: {store.pleopleData.hair_color}</p>
          <p>Eye Color: {store.peopleData.eye_color}</p>

          <p>Birth Year: {store.peopleData.birth_year}</p>
        </div>
      </div>
    </div>
  );
};

export { PeopleInfo };
