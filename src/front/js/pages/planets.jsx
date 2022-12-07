import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  console.log(store?.planets);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Planets
      </h2>

      <div className="container-fluid row row-cols-5">
        {store?.planets.map((item, i) => {
          return (
            <>
              <Card
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
