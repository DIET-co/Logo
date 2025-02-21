
import React from "react";

const Diamond = () => (
  <svg width="100%" height="100%" viewBox="0 0 200 200" className="diamond">
    <polygon
      points="100,20 180,100 100,180 20,100"
      fill="none"
      stroke="white"
      strokeWidth="10"
    />
    <line x1="100" y1="20" x2="180" y2="100" stroke="#E86F37" strokeWidth="10" />
    <line x1="180" y1="100" x2="100" y2="180" stroke="#D9A760" strokeWidth="10" />
    <line x1="100" y1="180" x2="20" y2="100" stroke="#C75C5C" strokeWidth="10" />
    <line x1="20" y1="100" x2="100" y2="20" stroke="#72BFAC" strokeWidth="10" />
  </svg>
);

export default Diamond;
