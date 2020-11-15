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
  <main>
    <ol>
      <li>
        <Link to="/schedule/">
          {' '}
          <PreviewCompatibleImage
            alt="Illustration for Yoga"
            src={yogaImage}
          /> <span>Yoga</span>{' '}
        </Link>
        <p>{yogaBlurb}</p>
      </li>
      <li>
        <a href="http://unityherbals.ca/">
          {' '}
          <PreviewCompatibleImage alt="Illustration for Tea" src={teaImage} /> <span>Tea</span>{' '}
        </a>
        <p>{teaBlurb}</p>
      </li>
      <li>
        <a href="http://unityretreats.ca/">
          {' '}
          <PreviewCompatibleImage alt="Illustration for Good Company" src={goodCompanyImage} />{' '}
          <span>Good Company</span>{' '}
        </a>
        <p>{goodCompanyBlurb}</p>
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
