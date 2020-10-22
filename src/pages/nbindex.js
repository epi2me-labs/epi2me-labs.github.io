import React from "react"
import { graphql } from "gatsby"
import {rhythm} from "../utils/typography";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NBIndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Notebook Index" />
      <h1>Index of Available Notebooks and Tutorials</h1>
      <section
        dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html }}
        itemProp="articleBody"
      />
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <Bio />
    </Layout>
  )
};

export default NBIndexPage

export const pageQuery = graphql`
  query AboutPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/nbindex/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
