import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.loadDataPeople();
  }, []);
  console.log(store?.people);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Characters
      </h2>

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
