import React, { useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";

import { Context } from "../store/appContext";

const Films = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadDataFilms();
    actions.loadDataAllFilms();
  }, []);

  return (
    <div>
      <h2
        className="my-5 d-flex justify-content-center"
        style={{ color: "#FFE81F" }}
      >
        Films
      </h2>

      <div className="container-fluid row row-cols-5">
        {store?.films.map((item, i) => {
          return (
            <>
              <Card type={"films"} key={item?.uid} index={i} uid={item?.uid} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export { Films };
