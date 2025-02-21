import React from "react";
import Diamond from "./diamond";
import "./HtmlCssLogo.css";

const LogoText = () => (
  <div className="logo-text">
    <h1>
      <span className="text-white">HTML</span>
      <span className="text-orange">&</span>
      <span className="text-white">CSS</span>
    </h1>
    <p>design and build websites</p>
  </div>
);

const HtmlCssLogo = () => (
  <div className="logo-container">
    <Diamond />
    <LogoText />
  </div>
);

export default HtmlCssLogo;