import React from "react"
import PropTypes from "prop-types"
import { Container } from "./styles"
import { graphql, StaticQuery } from "gatsby"

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { postsData } = data
    return (
      <Container>
        <h3>Posts :</h3>
        {postsData.edges.map(({ node }) => {
          return <a href={node.fields.slug}>{node.frontmatter.title}</a>
        })}
      </Container>
    )
  }
}

function PostList({ data }) {
  const { postsData } = data
  return (
    <Container>
      <h3>Posts :</h3>
      {postsData.edges.map(({ node }) => {
        return <a href={node.fields.slug}>{node.frontmatter.title}</a>
      })}
    </Container>
  )
}

PostList.propTypes = {
  data: PropTypes.shape({
    postsData: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PostList {
        postsData: allMarkdownRemark(
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
    `}
    render={data => <BlogRoll data={data} />}
  />
)
