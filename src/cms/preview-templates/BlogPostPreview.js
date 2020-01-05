import React from 'react';
import PropTypes from 'prop-types';
import BlogPost from '../../templates/BlogPost';

function BlogPostPreview({ entry, widgetFor }) {
  const homeData = entry.getIn(['data']).toJS();
  return (
    <section>
      <BlogPost
        data={{
          markdownRemark: {
            frontmatter: {
              title: homeData.title,
              image: homeData.image,
            },
            html: widgetFor('body'),
          },
        }}
        isPreview
      />
    </section>
  );
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
};

export default BlogPostPreview;
