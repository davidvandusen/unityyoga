import PropTypes from 'prop-types';
import React from 'react';

import Teacher from '../../components/Teacher';

const TeacherPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return <Teacher {...data} />;
  } else {
    return <div>Loading...</div>;
  }
};

TeacherPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TeacherPagePreview;
