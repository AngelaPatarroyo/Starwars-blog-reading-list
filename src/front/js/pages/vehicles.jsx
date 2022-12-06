import React, { useContext, useEffect } from "react";
import { Card } from "../component/card.jsx";
import { Context } from "../store/appContext";

export const Vehicles = () => {
  const { store, actions } = useContext(Context);
  console.log(store?.vehicles);
  return (
    <div>
      <Card />
    </div>
  );
};
