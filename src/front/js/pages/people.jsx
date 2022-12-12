import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);
  const paginado = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    actions.loadDataPeople();
  }, []);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Characters
      </h2>

      {paginado.map((element) => {
        return (
          <div className="float-lg-start">
            <button
              className="btn btn-primary mx-1 mb-5"
              onClick={() => {
                actions.loadDataPeople(element);
              }}
            >
              {element}
            </button>
          </div>
        );
      })}

      <div className="container-fluid row row-cols-5">
        {store?.people.map((item, i) => {
          return (
            <>
              <Card
                type={"people"}
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

export { People };
