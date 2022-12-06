import React, { useState, useEffect, useContext } from "react";
import { Card } from "../component/card.jsx";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Planets = () => {
  const { store, actions } = useContext(Context);
  console.log(store?.planets);

  return (
    <div className="container">
      <Card />
    </div>
  );
};

export { Planets };
