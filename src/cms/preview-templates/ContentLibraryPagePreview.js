import React from 'react';

import { ContentLibraryPageTemplate } from '../../templates/ContentLibraryPage';

const ContentLibraryPagePreview = ({ entry }) => {
  const { title } = entry.getIn(['data']).toJS();
  return <ContentLibraryPageTemplate title={title} />;
};

export default ContentLibraryPagePreview;
