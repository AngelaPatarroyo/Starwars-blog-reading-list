import React, { useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";

import { Context } from "../store/appContext";

const Starships = () => {
  const { store, actions } = useContext(Context);
  const paginado = [1, 2, 3, 4];
  useEffect(() => {
    actions.loadDataStarships();
  }, []);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Starships
      </h2>

      {paginado.map((element) => {
        return (
          <div className="float-lg-start">
            <button
              className="btn btn-primary mx-1 mb-5"
              onClick={() => {
                actions.loadDataStarships(element);
              }}
            >
              {element}
            </button>
          </div>
        );
      })}

      <div className="container-fluid row row-cols-5">
        {store?.starships.map((item, i) => {
          return (
            <>
              <Card
                type={"starships"}
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

export { Starships };
