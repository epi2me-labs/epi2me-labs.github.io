import React from "react"
import { graphql } from "gatsby"
import {rhythm} from "../utils/typography";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const WFIndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <SEO title="Workflow index" />
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

export default WFIndexPage

export const pageQuery = graphql`
  query WFIndexQuery {
    markdownRemark(fileAbsolutePath: { regex: "/wfindex/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
