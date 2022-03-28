import React from 'react';
import { NavLink } from "react-router-dom" // liens "<a>" importés depuis bibli react-router-dom

// équivalent des ancres
const Navigation = () => {
  return (
    <div className="navigation">
        <ul>
          {/* si nav est active,  alors injecter la classe et style de "nav-active", sinon ne rien mettre */}
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>accueil</li>
          </NavLink>
          <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>à propos</li>
          </NavLink>
        </ul>
      </div>
  );
};

export default Navigation;
