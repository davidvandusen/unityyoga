import React from 'react';

import { IndexPageTemplate } from '../../templates/IndexPage';

const IndexPagePreview = ({ entry }) => {
  const {
    goodCompanyBlurb,
    goodCompanyImage,
    teaBlurb,
    teaImage,
    yogaBlurb,
    yogaImage,
  } = entry.getIn(['data']).toJS();
  return (
    <IndexPageTemplate
      goodCompanyBlurb={goodCompanyBlurb}
      goodCompanyImage={goodCompanyImage}
      teaBlurb={teaBlurb}
      teaImage={teaImage}
      yogaBlurb={yogaBlurb}
      yogaImage={yogaImage}
    />
  );
};

export default IndexPagePreview;
