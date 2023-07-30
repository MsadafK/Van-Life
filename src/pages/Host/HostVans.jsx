import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [van, setVan] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  const hostVansEl = van.map((item) => {
    return (
      <Link to={`./${item.id}`} key={item.id}>
        <div className="hostVans-container" key={item.id}>
          <div className="listed-vans">
            <img src={item.imageUrl} />
            <div>
              <h2>{item.name}</h2>
              <p>${item.price}/day</p>
            </div>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <h1>Your listed vans</h1>
      {hostVansEl}
    </div>
  );
}
