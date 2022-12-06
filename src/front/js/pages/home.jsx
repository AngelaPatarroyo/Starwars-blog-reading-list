import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fondo from "../../img/fondo.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <img className="" style={{ width: 1660, height: 800 }} src={fondo} />
    </div>
  );
};
