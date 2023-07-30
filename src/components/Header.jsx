import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to=".">
        <h3>#VANLIFE</h3>
      </Link>
      <nav>
        <NavLink
          to="host"
          className={({ isActive }) =>
            isActive ? "header-nav-links" : undefined
          }
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? "header-nav-links" : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          className={({ isActive }) =>
            isActive ? "header-nav-links" : undefined
          }
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}
