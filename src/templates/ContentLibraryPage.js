import React from 'react';

import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

export const ContentLibraryPageTemplate = () => (
  <main className="main-content wide">
    <div className="mobile-only embed-fixed-on-mobile">
      <iframe
        frameBorder="0"
        height="100%"
        src="https://app.punchpass.com/org/8932/content-library?embed=true"
        title="Unity Yoga PunchPass content library"
        width="100%"
      />
    </div>
    <div className="desktop-only">
      <iframe
        frameBorder="0"
        height="1440"
        src="https://app.punchpass.com/org/8932/content-library?embed=true"
        title="Unity Yoga PunchPass content library"
        width="100%"
      />
    </div>
  </main>
);
const ContentLibraryPage = ({
  data: {
    markdownRemark: {
      frontmatter: { description, title },
    },
  },
}) => {
  return (
    <Layout description={description} title={title} withNav>
      <Helmet>
        <body className="fixed-embed-page" />
      </Helmet>
      <ContentLibraryPageTemplate title={title} />{' '}
    </Layout>
  );
};

export default ContentLibraryPage;

export const contentLibraryPageQuery = graphql`
  query contentLibraryPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "ContentLibraryPage" } }) {
      frontmatter {
        description
        title
      }
    }
  }
`;
