import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = props => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
