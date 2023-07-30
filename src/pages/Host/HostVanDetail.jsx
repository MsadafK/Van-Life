import React from "react";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

export default function HostVanDetail() {
  const [van, setVan] = React.useState(null);
  const { id } = useParams();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);

  const x =
    van &&
    van.map((item) => {
      return (
        <div className="hostVans-container" key={item.id}>
          <div className="listed-vans details">
            <img src={item.imageUrl} />
            <div>
              <a href="#" className={`type ${item.type}`}>
                {item.type}
              </a>
              <h2>{item.name}</h2>
              <p>${item.price}/day</p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div>
      <h1>xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h1>
      <br />
      <Link to=".." relative="path">
        ⬅ Back to all vans
      </Link>
      {x}
      <NavLink
        to="."
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        Details
      </NavLink>
      <NavLink
        to="pricing"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        Pricing
      </NavLink>
      <NavLink
        to="photos"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        end
      >
        Photos
      </NavLink>
      <Outlet />
    </div>
  );
}
