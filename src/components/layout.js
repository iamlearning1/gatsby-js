import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.scss";

const Layout = props => {
  return (
    <div>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
