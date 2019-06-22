import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";

const BlogPage = () => {
  const {
    allMarkdownRemark: { nodes },
  } = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
          }
        }
      }
    }
  `);

  console.log(nodes);
  return (
    <Layout>
      <p>Blogs</p>
      <ol>
        {nodes.map((node, index) => (
          <li key={index}>{node.frontmatter.title}</li>
        ))}
      </ol>
    </Layout>
  );
};
export default BlogPage;
