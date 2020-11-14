import Img from 'gatsby-image';
import React from 'react';

const PreviewCompatibleImage = ({ alt = '', src, ...props }) => {
  if (typeof src === 'string' && src.length > 0) {
    return <img alt={alt} src={src} {...props} />;
  }
  if (typeof src === 'object' && src.childImageSharp) {
    if (src.childImageSharp.fixed) {
      return <Img alt={alt} fixed={src.childImageSharp.fixed} {...props} />;
    }
    if (src.childImageSharp.fluid) {
      return <Img alt={alt} fluid={src.childImageSharp.fluid} {...props} />;
    }
  }
  return null;
};

export default PreviewCompatibleImage;
