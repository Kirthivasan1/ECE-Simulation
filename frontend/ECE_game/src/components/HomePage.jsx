// src/components/HomePage.jsx
import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container align-center">
        <div className="button">
          <Link to="/playground">
            <button>CREATE PLAYGROUND</button>
          </Link>
        </div>
        <br />
        <div className="button">
          <Link to="/viewPlaygrounds">
            <button>OPEN PLAYGROUND</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
