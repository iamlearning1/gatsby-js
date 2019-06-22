import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => (
  <Layout>
    <h1>Index page</h1>
    <p>
      <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
);

export default IndexPage;
