import React from 'react';

import { MarkdownPageTemplate } from '../../templates/MarkdownPage';

const MarkdownPagePreview = ({ entry, widgetFor }) => {
  const { title } = entry.getIn(['data']).toJS();
  return <MarkdownPageTemplate title={title} content={widgetFor('body')} />;
};

export default MarkdownPagePreview;
