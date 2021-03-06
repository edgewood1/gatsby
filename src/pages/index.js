import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";

const IndexPage = () => (
  <Layout>
    <h1 style={{ marginBottom: "0" }}>Mel DeJesus</h1>
    <p>Exploring the MERN stack</p>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image />
    </div>
  </Layout>
);

export default IndexPage;
