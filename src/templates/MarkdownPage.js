import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../components/Layout';
import useSiteMetadata from '../components/useSiteMetadata';

export const MarkdownPageTemplate = ({ content, html, title }) => (
  <>
    <h1 className="main-heading">{title}</h1>
    <div className="markdown-page">
      {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : content}
    </div>
  </>
);

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
      <Helmet title={`${title} | ${siteTitle}`} />{' '}
      <MarkdownPageTemplate html={html} title={title} />{' '}
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
