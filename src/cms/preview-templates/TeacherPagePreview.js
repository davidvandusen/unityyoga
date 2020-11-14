import React from 'react';

import Teacher from '../../components/Teacher';

const TeacherPagePreview = ({ entry, widgetFor }) => {
  const { teacherImage, title } = entry.getIn(['data']).toJS();
  return <Teacher teacherName={title} teacherImage={teacherImage} bio={widgetFor('body')} />;
};

export default TeacherPagePreview;
