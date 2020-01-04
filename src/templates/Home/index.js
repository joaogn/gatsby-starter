import React from "react"
import { Helmet } from "react-helmet"
import { Container } from "./styles"
import { posts } from "./posts"

export default function HomePage({ data, isPreview }) {
  const homeData = data.markdownRemark
  return (
    <Container
      banner={
        homeData.frontmatter.image.childImageSharp
          ? homeData.frontmatter.image.childImageSharp.fluid.src
          : homeData.frontmatter.image
      }
    >
      <Helmet>
        <title>{homeData.frontmatter.titleSEO}</title>
        <meta
          name="description"
          content={homeData.frontmatter.descriptionSEO}
        />
      </Helmet>
      <div className={"banner"}>
        <h1>{homeData.frontmatter.title}</h1>
        <h2>{homeData.frontmatter.subtitle}</h2>
        <div className={"posts"}>
          <h2>Posts</h2>
          <div className={"postsContent"}>
            {posts.map(({ node }) => {
              return (
                <a href={node.fields.slug}>
                  <img src={node.frontmatter.image.childImageSharp.fluid.src} />
                  <p>{node.frontmatter.title}</p>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

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
            fluid(maxWidth: 500, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`
