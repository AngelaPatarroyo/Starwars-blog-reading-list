import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const VehiclesInfo = () => {
  const { store, actions } = useContext(Context);
  const { vehiclesid } = useParams();

  useEffect(() => {
    actions.loadDataAllVehicles(vehiclesid);
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
          src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiclesid}.jpg`}
          onError={(e) => imgError(e)}
        />
        <div className="text-white">
          <h1 className="mt-4">{store.vehiclesData.name}</h1>
          <hr></hr>
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
