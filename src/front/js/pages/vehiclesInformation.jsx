import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehiclesInfo = () => {
  const { store, actions } = useContext(Context);
  const { vehiclesid } = useParams();

  useEffect(() => {
    actions.loadDataAllVehicles(vehiclesid);
  }, []);
  return (
    <div>
      <div className="container-fluid d-flex mt-5">
        <div>
          <img
            className="ms-5"
            style={{ width: "500px" }}
            src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesid}.jpg`}
          />
        </div>
        <div className="text-white">
          <h1>{store.vehiclesData.name}</h1>
          <p className="mt-5">Model: {store.vehiclesData.model}</p>
          <p>Class: {store.vehiclesData.vehicle_class}</p>
          <p>Manufacturer: {store.vehiclesData.manufacturer}</p>
          <p>Length: {store.vehiclesData.length}</p>

          <p>Passengers: {store.vehiclesData.passengers}</p>
        </div>
      </div>
    </div>
  );
};
export { VehiclesInfo };
