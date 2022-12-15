import React, { useContext, useEffect } from "react";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const paginado = [1, 2, 3, 4];

  useEffect(() => {
    actions.loadDataVehicles();
  }, []);
  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Vehicles
      </h2>
      <div className="d-flex justify-content-center">
        {paginado.map((element) => {
          return (
            <button
              className="btn btn-primary mx-1 mb-5"
              onClick={() => {
                actions.loadDataVehicles(element);
              }}
            >
              {element}
            </button>
          );
        })}
      </div>
      <div className="container-fluid row row-cols-5">
        {store?.vehicles.map((item, i) => {
          return (
            <Card
              type={"vehicles"}
              key={item?.uid}
              name={item?.name}
              index={i}
              uid={item?.uid}
            />
          );
        })}
      </div>
    </div>
  );
};

export { Vehicles };
