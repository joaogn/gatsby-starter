import React from "react"
import { Helmet } from "react-helmet"
import { Container } from "./styles"

export default function BlogPost({ data, isPreview }) {
  let post
  if (isPreview) {
    post = data.post
  } else {
    post = data.markdownRemark
  }
  return (
    <Container>
      <Helmet>
        <title>{post.frontmatter.titleSEO}</title>
        <meta name="description" content={post.frontmatter.descriptionSEO} />
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      <img src={post.frontmatter.image.childImageSharp.fluid.src} />
      {isPreview ? (
        post.html
      ) : (
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      )}
    </Container>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 500, quality: 100) {
              src
            }
          }
        }
        title
        titleSEO
        descriptionSEO
      }
    }
  }
`
