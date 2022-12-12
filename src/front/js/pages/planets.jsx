import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const paginado = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    actions.loadDataPlanets();
  }, []);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Planets
      </h2>
      {paginado.map((element) => {
        return (
          <div className="float-lg-start">
            <button
              className="btn btn-primary mx-1 mb-5"
              onClick={() => {
                actions.loadDataPlanets(element);
              }}
            >
              {element}
            </button>
          </div>
        );
      })}

      <div className="container-fluid row row-cols-5">
        {store?.planets.map((item, i) => {
          return (
            <>
              <Card
                type={"planets"}
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

export { Planets };
