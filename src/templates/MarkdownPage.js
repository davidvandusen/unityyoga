import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';

export const MarkdownPageTemplate = ({ content, html, title }) => (
  <>
    <h1>{title}</h1>
    {html ? <div dangerouslySetInnerHTML={{ __html: html }} /> : content}
  </>
);

const MarkdownPage = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { description, title },
    },
  },
}) => {
  return (
    <Layout description={description} title={title} withNav>
      {' '}
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
        description
        title
      }
    }
  }
`;
