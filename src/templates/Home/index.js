import React from "react"
//import { graphql } from "gatsby"
import { Container } from "./styles"

import PostsList from "../../components/PostList"
//import { useStaticQuery, graphql } from "gatsby"

export const HomeTemplate = ({ data, isPreview }) => {
  const homeData = data.markdownRemark
  return (
    <Container
      banner={
        homeData.frontmatter.image.childImageSharp
          ? homeData.frontmatter.image.childImageSharp.fluid.src
          : homeData.frontmatter.image
      }
    >
      <div className={"banner"}>
        <h1>{homeData.frontmatter.title}</h1>
        <h2>{homeData.frontmatter.subtitle}</h2>
        <PostsList />
      </div>
    </Container>
  )
}

const HomePage = ({ data }) => {
  return <HomeTemplate data={data} />
}

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "Home" } }) {
      frontmatter {
        titleSEO
        descriptionSEO
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 1700, quality: 100) {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "BlogPost" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
