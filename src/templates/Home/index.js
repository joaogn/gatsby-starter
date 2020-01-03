import React from "react"

import { Container } from "./styles"
export default function Home({ data, isPreview }) {
  let post
  if (isPreview) {
    post = data.post
  } else {
    post = data.markdownRemark
  }
  return (
    <Container
      banner={
        post.frontmatter.image.childImageSharp
          ? post.frontmatter.image.childImageSharp.fluid.src
          : post.frontmatter.image
      }
    >
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h2>{post.frontmatter.subtitle}</h2>
      </div>
    </Container>
  )
}

export const pageQuery = graphql`
  query HomePage {
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
  }
`
