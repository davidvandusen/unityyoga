import React from 'react';

import { LayoutTemplate } from '../../components/Layout';

const LayoutPreview = ({ entry }) => {
  const {
    backgroundImage,
    copyright,
    headingImage,
    headingImageAlt,
    links,
    logoImage,
    logoImageAlt,
    quoteImage,
    socialHeadingHref,
    socialHeadingImage,
    socialHeadingImageAlt,
    socialImages,
    testimonial,
    testimonialAttribution,
  } = entry.getIn(['data']).toJS();
  return (
    <LayoutTemplate
      backgroundImage={backgroundImage}
      copyright={copyright}
      headingImage={headingImage}
      headingImageAlt={headingImageAlt}
      links={links}
      logoImage={logoImage}
      logoImageAlt={logoImageAlt}
      quoteImage={quoteImage}
      socialHeadingHref={socialHeadingHref}
      socialHeadingImage={socialHeadingImage}
      socialHeadingImageAlt={socialHeadingImageAlt}
      socialImages={socialImages}
      testimonial={testimonial}
      testimonialAttribution={testimonialAttribution}
      withNav
    />
  );
};

export default LayoutPreview;
