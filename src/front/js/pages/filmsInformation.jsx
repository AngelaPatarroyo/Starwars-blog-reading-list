import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const FilmsInfo = () => {
  const { store, actions } = useContext(Context);
  const { filmsid } = useParams();
  useEffect(() => {
    actions.loadDataAllFilms(filmsid);
  }, []);

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
          style={{ maxWidth: "500px" }}
          src={`https://starwars-visualguide.com/assets/img/films/${filmsid}.jpg`}
          onError={(e) => imgError(e)}
        />
        <div className="text-white pe-3">
          <h1 className="mt-4">{store.filmsData.title || ""}</h1>
          <hr></hr>
          <p className="mt-5">Producer: {store.filmsData.producer}</p>
          <p>Director: {store.filmsData.director}</p>
          <p>Release Data: {store.filmsData.release_date}</p>
          <p>Opening Crawl: {store.filmsData.opening_crawl}</p>
        </div>
      </div>
    </div>
  );
};

export { FilmsInfo };
