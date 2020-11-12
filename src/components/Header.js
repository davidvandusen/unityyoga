import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "unity.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      mobileHeadingImage: file(relativePath: { eq: "yoga-tea-and-good-company.png" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      desktopHeadingImage: file(relativePath: { eq: "yoga-tea-and-good-company.png" }) {
        childImageSharp {
          fixed(width: 394, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <header className="site-header">
      <div className="site-header-branding">
        <a href="/">
          {' '}
          <Img alt="Unity" fixed={data.logoImage.childImageSharp.fixed} />{' '}
        </a>
      </div>
      <div className="site-header-heading">
        <Img
          alt="Yoga, Tea &amp; Good Company..."
          fixed={[
            data.mobileHeadingImage.childImageSharp.fixed,
            { ...data.desktopHeadingImage.childImageSharp.fixed, media: '(min-width: 769px)' },
          ]}
        />
      </div>
    </header>
  );
};

export default Header;
