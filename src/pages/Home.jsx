import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <img
        src="../../public/images/mountains.png"
        alt="mountains image with light greish shade"
        className="home-img"
      />
      <div className="inside-home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className="home-link-button">
          Find your Van
        </Link>
      </div>
    </div>
  );
}
