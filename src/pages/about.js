import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Header from "../components/header";

export default ({ data }) => (
  <Layout>
    <Header />
  </Layout>
);

//  you are export a query that will
// get the title from the siteMetadata
// and pass it above as data
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
