import PropTypes from 'prop-types';
import React from 'react';

import { IndexPageTemplate } from '../../templates/IndexPage';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <IndexPageTemplate {...data} />;
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;
