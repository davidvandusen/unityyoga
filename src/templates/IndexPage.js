import { graphql, Link } from 'gatsby';

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
  <main className="main-content wide landing-page">
    <ol className="services-list">
      <li className="services-item">
        <Link className="services-link" to="/schedule/">
          <div className="services-image">
            <PreviewCompatibleImage alt="Illustration for Yoga" src={yogaImage} />
          </div>
          <div className="services-name">Yoga</div>
        </Link>
        <div className="services-blurb">{yogaBlurb}</div>
      </li>
      <li className="services-item">
        <a className="services-link" href="http://unityherbals.ca/">
          <div className="services-image">
            <PreviewCompatibleImage alt="Illustration for Tea" src={teaImage} />
          </div>
          <div className="services-name">Tea</div>
        </a>
        <div className="services-blurb">{teaBlurb}</div>
      </li>
      <li className="services-item">
        <a className="services-link" href="http://unityretreats.ca/">
          <div className="services-image">
            <PreviewCompatibleImage alt="Illustration for Good Company" src={goodCompanyImage} />
          </div>
          <div className="services-name">Good Company</div>
        </a>
        <div className="services-blurb">{goodCompanyBlurb}</div>
      </li>
    </ol>
  </main>
);

const IndexPage = ({
  data: {
    markdownRemark: {
      frontmatter: {
        description,
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
  <Layout description={description} title={title}>
    {' '}
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
        description
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
