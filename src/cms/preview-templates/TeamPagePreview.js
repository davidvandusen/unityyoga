import React from 'react';

import { TeamPageTemplate } from '../../templates/TeamPage';

const TeamPagePreview = ({ entry }) => {
  const { members, title } = entry.getIn(['data']).toJS();
  return <TeamPageTemplate members={members} title={title} />;
};

export default TeamPagePreview;
