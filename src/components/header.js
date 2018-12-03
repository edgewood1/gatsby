import React from "react";
import { Link } from "gatsby";
import "./header.css";

const Header = ({ siteTitle }) => (
  <div id="outer">
    <div id="inner">
      <h1>
        <Link id="left" to="/">
          {siteTitle}
        </Link>
        <Link to="/tags" className="nav">
          Categories
        </Link>
        <Link to="/posts" className="nav">
          BlogRoll
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
