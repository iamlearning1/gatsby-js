import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => (
  <Layout>
    <Head></Head>
    <p>
      <Link to="/contact">Contact me</Link>
    </p>
  </Layout>
);

export default IndexPage;
