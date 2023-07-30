import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {
  const { van } = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{van[0].name}</span>
      </h4>
      <h4>
        Category: <span>{van[0].type}</span>
      </h4>
      <h4>
        Description: <span>{van[0].description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
}
