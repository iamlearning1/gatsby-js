import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
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
          fields {
            slug
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
          <Link to={`/blog/${node.fields.slug}`}>
            <li key={index}>{node.frontmatter.title}</li>
          </Link>
        ))}
      </ol>
    </Layout>
  );
};
export default BlogPage;
