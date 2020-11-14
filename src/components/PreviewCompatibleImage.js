import Img from 'gatsby-image';
import React from 'react';

const PreviewCompatibleImage = ({ imageInfo, ...props }) => {
  const { alt = '', childImageSharp, image } = imageInfo;
  if (image && image.childImageSharp) {
    return <Img alt={alt} fluid={image.childImageSharp.fluid} {...props} />;
  }
  if (childImageSharp) {
    return <Img alt={alt} fluid={childImageSharp.fluid} {...props} />;
  }
  if (typeof image === 'string' && image.length > 0) {
    return <img alt={alt} src={image} {...props} />;
  }
  return null;
};

export default PreviewCompatibleImage;
