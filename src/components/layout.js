import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/layout.scss";
import styles from "./layout.module.scss";

const Layout = props => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header></Header>
        {props.children}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;
