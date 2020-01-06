import React from 'react';
import PropTypes from 'prop-types';
import Home from '../../templates/Home';

function HomePreview({ entry }) {
  const homeData = entry.getIn(['data']).toJS();
  return (
    <Home
      data={{
        markdownRemark: {
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
  );
}

HomePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
};

export default HomePreview;
