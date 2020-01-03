import React from "react"

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
      <h1>{post.frontmatter.title}</h1>
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
        title
      }
    }
  }
`
