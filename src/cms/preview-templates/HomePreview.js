import React from "react"
import Home from "../../templates/Home"
import PropTypes from "prop-types"

const HomePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS()
  return (
    <section>
      <Home
        data={{
          post: {
            frontmatter: {
              titleSEO: data.titleSEO,
              descriptionSEO: data.descriptionSEO,
              image: data.image,
              title: data.title,
              subtitle: data.subtitle,
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
