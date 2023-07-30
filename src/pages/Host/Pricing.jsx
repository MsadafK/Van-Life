import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { van } = useOutletContext();
  return (
    <h3 className="host-van-price">
      ${van[0].price}
      <span>/day</span>
    </h3>
  );
}
