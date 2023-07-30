import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();
  const [ixd, setId] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setId(data.vans));
  }, []);

  console.log(ixd);

  return (
    ixd && (
      <>
        <Link to="/vans" className="vans-details-first-link">
          ⬅ Back to all vans
        </Link>
        <div className="vansDetail-container">
          <img src={ixd.imageUrl} alt="" />
          <a href="#" className={`type ${ixd.type}`}>
            {ixd.type}
          </a>
          <h1>{ixd.name}</h1>
          <p className="van-details-price">
            ${ixd.price}
            <span className="per-day">/day</span>
          </p>
          <p>{ixd.description}</p>
          <a href="#" className="rent-this-van">
            Rent this van
          </a>
        </div>
      </>
    )
  );
}
