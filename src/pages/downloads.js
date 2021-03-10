import React from "react"
import { graphql } from "gatsby"
import {rhythm} from "../utils/typography";

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const DownloadsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location}>
      <SEO title="Downloads" />
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

export default DownloadsPage

export const pageQuery = graphql`
  query DownloadsPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/downloads/" }) {
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
