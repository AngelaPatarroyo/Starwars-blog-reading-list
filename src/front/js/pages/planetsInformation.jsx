import React from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const PlanetsInfo = () => {
  /* const { store } = useContext(Context); */
  return (
    <div>
      <div className="container-fluid d-flex mt-5">
        <img
          id="planetaimagen"
          clasName="ms-5"
          style={{ width: "500px" }}
          src="https://starwarsblog.starwars.com/wp-content/uploads/2022/03/inside-intel-coruscant-planet.jpg"
        />

        <div>
          <h1 className="text-white">Nombre Planeta</h1>
        </div>
      </div>
      <div className="text-white">
        <p>Diameter:</p>
        <p>Gravity:</p>
      </div>
    </div>
  );
};

export { PlanetsInfo };
