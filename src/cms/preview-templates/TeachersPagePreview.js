import React from 'react';

import { TeachersPageTemplate } from '../../templates/TeachersPage';

const TeachersPagePreview = ({ entry }) => {
  const { teachers, title } = entry.getIn(['data']).toJS();
  return <TeachersPageTemplate teachers={teachers} title={title} />;
};

export default TeachersPagePreview;
