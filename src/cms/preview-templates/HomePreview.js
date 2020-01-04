import React from "react"
import Home from "../../templates/Home"
import PropTypes from "prop-types"

function HomePreview({ data, entry, getAsset }) {
  const homeData = entry.getIn(["data"]).toJS()
  return (
    <Home
      data={{
        homeData: {
          frontmatter: {
            titleSEO: homeData.titleSEO,
            descriptionSEO: homeData.descriptionSEO,
            image: homeData.image,
            title: homeData.title,
            subtitle: homeData.subtitle,
          },
        },
      }}
    />
  )
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePreview
