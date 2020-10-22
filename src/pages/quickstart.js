import React from "react"
import { graphql } from "gatsby"
import {rhythm} from "../utils/typography";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const QuickStartPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quick Start" />
      <h1>EPI2MELabs quick start guide</h1>
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

export default QuickStartPage

export const pageQuery = graphql`
  query QuickStartQuery {
    markdownRemark(fileAbsolutePath: { regex: "/quickstart/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
