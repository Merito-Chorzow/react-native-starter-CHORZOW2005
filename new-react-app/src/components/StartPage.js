import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="page">
      <h1>Witaj w MemorySpot ✨</h1>
      <p>Zapisuj swoje myśli i emocje wraz z lokalizacją miejsc, które są dla Ciebie ważne.</p>
      <Link className="btn" to="/add">
        Rozpocznij
      </Link>
    </div>
  );
};

export default StartPage;