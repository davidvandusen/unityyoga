import Img from 'gatsby-image';
import React from 'react';

const PreviewCompatibleImage = ({ alt = '', src, ...props }) => {
  if (typeof src === 'string' && src.length > 0) {
    return <img alt={alt} src={src} {...props} />;
  }
  if (typeof src === 'object' && src.childImageSharp) {
    return <Img alt={alt} {...src.childImageSharp} {...props} />;
  }
  return null;
};

export default PreviewCompatibleImage;
