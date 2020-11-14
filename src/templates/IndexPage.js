import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';

import React from 'react';
import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const IndexPageTemplate = ({
  goodCompanyBlurb,
  goodCompanyImage,
  teaBlurb,
  teaImage,
  yogaBlurb,
  yogaImage,
}) => (
  <main>
    <ol className="services-list">
      <li className="services-item">
        <Link className="services-item-link" to="/schedule/">
          {' '}
          <PreviewCompatibleImage
            className="services-item-image"
            imageInfo={{
              alt: 'Illustration for Yoga',
              image: yogaImage,
            }}
          />{' '}
          <span className="services-item-link-text">Yoga</span>{' '}
        </Link>
        <p className="services-item-blurb">{yogaBlurb}</p>
      </li>
      <li className="services-item">
        <a className="services-item-link" href="http://unityherbals.ca/">
          {' '}
          <PreviewCompatibleImage
            className="services-item-image"
            imageInfo={{
              alt: 'Illustration for Tea',
              image: teaImage,
            }}
          />{' '}
          <span className="services-item-link-text">Tea</span>{' '}
        </a>
        <p className="services-item-blurb">{teaBlurb}</p>
      </li>
      <li className="services-item">
        <a className="services-item-link" href="http://unityretreats.ca/">
          {' '}
          <PreviewCompatibleImage
            className="services-item-image"
            imageInfo={{
              alt: 'Illustration for Good Company',
              image: goodCompanyImage,
            }}
          />{' '}
          <span className="services-item-link-text">Good Company</span>{' '}
        </a>
        <p className="services-item-blurb">{goodCompanyBlurb}</p>
      </li>
    </ol>
  </main>
);

const IndexPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        goodCompanyBlurb,
        goodCompanyImage,
        teaBlurb,
        teaImage,
        title,
        yogaBlurb,
        yogaImage,
      },
    },
  },
}) => (
  <Layout>
    {' '}
    <Helmet title={title} />{' '}
    <IndexPageTemplate
      goodCompanyBlurb={goodCompanyBlurb}
      goodCompanyImage={goodCompanyImage}
      teaBlurb={teaBlurb}
      teaImage={teaImage}
      yogaBlurb={yogaBlurb}
      yogaImage={yogaImage}
    />{' '}
  </Layout>
);

export default IndexPage;

export const indexPageQuery = graphql`
  query indexPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "IndexPage" } }) {
      frontmatter {
        goodCompanyBlurb
        goodCompanyImage {
          childImageSharp {
            fluid(maxWidth: 456, maxHeight: 421, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        teaBlurb
        teaImage {
          childImageSharp {
            fluid(maxWidth: 456, maxHeight: 421, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
        yogaBlurb
        yogaImage {
          childImageSharp {
            fluid(maxWidth: 456, maxHeight: 421, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
