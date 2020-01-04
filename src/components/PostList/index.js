import React from "react"
import { Container } from "./styles"
import { posts } from "./posts"

export default function PostList() {
  return (
    <Container>
      <h3>Posts :</h3>
      {posts.map(({ node }) => {
        return <a href={node.fields.slug}>{node.frontmatter.title}</a>
      })}
    </Container>
  )
}
