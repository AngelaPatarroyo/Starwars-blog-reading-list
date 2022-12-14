import React, { useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Species = () => {
  const { store, actions } = useContext(Context);
  const paginado = [1, 2, 3, 4];
  useEffect(() => {
    actions.loadDataSpecies();
  }, []);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Species
      </h2>
      <div className="d-flex justify-content-center">
        {paginado.map((element) => {
          return (
            <button
              className="btn btn-primary mx-1 mb-5"
              onClick={() => {
                actions.loadDataSpecies(element);
              }}
            >
              {element}
            </button>
          );
        })}
      </div>
      <div className="container-fluid row row-cols-5">
        {store?.species.map((item, i) => {
          return (
            <>
              <Card
                type={"species"}
                key={item?.uid}
                name={item?.name}
                index={i}
                uid={item?.uid}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
