import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./blog.module.scss";

const BlogPage = () => {
  const {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: published, order: DESC }) {
        edges {
          node {
            title
            slug
            published(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <p>Blogs</p>
      <ol>
        {edges.map((edge, index) => (
          <Link to={`/blog/${edge.node.slug}`} className={styles.links}>
            <li key={index}>{edge.node.title}</li>
          </Link>
        ))}
      </ol>
    </Layout>
  );
};
export default BlogPage;
