import React from "react"
import BlogPost from "../../templates/BlogPost"
import PropTypes from "prop-types"

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <section>
      <BlogPost
        data={{
          post: {
            frontmatter: { title: entry.getIn(["data", "title"]) },
            html: widgetFor("body"),
          },
        }}
        isPreview
      />
    </section>
  )
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
