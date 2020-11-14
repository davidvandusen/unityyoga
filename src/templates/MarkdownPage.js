import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../components/Layout';
import useSiteMetadata from '../components/useSiteMetadata';

const MarkdownPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title },
    },
  },
}) => {
  const { title: siteTitle } = useSiteMetadata();
  return (
    <Layout withNav>
      {' '}
      <Helmet title={`${title} | ${siteTitle}`} />
      <h1 className="main-heading">{title}</h1>
      <div className="markdown-page" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default MarkdownPage;

export const markdownPageQuery = graphql`
  query markdownPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
