import React from "react"
import Home from "../../templates/Home"
import PropTypes from "prop-types"

const HomePreview = ({ entry, widgetFor }) => {
  return (
    <section>
      <Home
        data={{
          post: {
            frontmatter: {
              titleSEO: entry.getIn(["data", "titleSEO"]),
              descriptionSEO: entry.getIn(["data", "descriptionSEO"]),
              image: entry.getIn(["data", "image"]),
              title: entry.getIn(["data", "title"]),
              subtitle: entry.getIn(["data", "subtitle"]),
            },
          },
        }}
        isPreview
      />
    </section>
  )
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePreview
