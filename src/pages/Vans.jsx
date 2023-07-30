import React from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [copyVans, setCopyVans] = React.useState(vans);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => {
        setVans(data.vans);
        setCopyVans(data.vans);
      });
  }, []);

  function vanElements(val = copyVans) {
    return (
      <div className="card-container">
        {val.map((item) => (
          <Link to={`/vans/${item.id}`} key={item.id}>
            <div className="card">
              <img src={item.imageUrl} className="van-img" />
              <div className="NamePrice">
                <div>
                  <h3>{item.name}</h3>

                  <a href="#" className={`type ${item.type}`}>
                    {item.type}
                  </a>
                </div>
                <p>
                  ${item.price}
                  <br />
                  <span className="per-day">/day</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="vans-container">
      <h1>Explor our van option</h1>
      <a
        href="#"
        className="filter-option"
        onClick={(e) => {
          setCopyVans(vans.filter((item) => item.type === e.target.text));
        }}
      >
        simple
      </a>
      <a
        href="#"
        className="filter-option"
        onClick={(e) => {
          setCopyVans(vans.filter((item) => item.type === e.target.text));
        }}
      >
        luxury
      </a>
      <a
        href="#"
        className="filter-option"
        onClick={(e) => {
          setCopyVans(vans.filter((item) => item.type === e.target.text));
        }}
      >
        rugged
      </a>
      <a
        href="#"
        className="filter-option clear"
        onClick={(e) => {
          setCopyVans(vans);
        }}
      >
        Clear filters
      </a>
      {vanElements()}
    </div>
  );
}
