import React from 'react';

import { SchedulePageTemplate } from '../../templates/SchedulePage';

const SchedulePagePreview = ({ entry }) => {
  const { title } = entry.getIn(['data']).toJS();
  return <SchedulePageTemplate title={title} />;
};

export default SchedulePagePreview;
