import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container, ImgContainer } from './styles';

export default function BlogPost({ data, isPreview = false }) {
  const post = data.markdownRemark;

  return (
    <Container>
      <Helmet>
        <title>{post.frontmatter.titleSEO}</title>
        <meta name="description" content={post.frontmatter.descriptionSEO} />
      </Helmet>
      <h1>{post.frontmatter.title}</h1>
      {isPreview ? (
        <img
          src={
            post.frontmatter.image.childImageSharp
              ? post.frontmatter.image.childImageSharp.fluid.src
              : post.frontmatter.image
          }
          alt={post.frontmatter.title}
        />
      ) : (
        <ImgContainer
          fluid={post.frontmatter.image.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
      )}
      {isPreview ? (
        post.html
      ) : (
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      )}
    </Container>
  );
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
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        titleSEO
        descriptionSEO
      }
    }
  }
`;

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.shape({
        titleSEO: PropTypes.string,
        descriptionSEO: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
        image: PropTypes.object,
      }),
    }),
  }).isRequired,
  isPreview: PropTypes.bool.isRequired,
};
