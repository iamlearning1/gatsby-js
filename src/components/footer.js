import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <footer>
      <p>Created by {author}</p>
    </footer>
  );
};

export default Footer;
