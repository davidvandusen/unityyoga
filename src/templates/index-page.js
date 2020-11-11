import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Layout from '../components/Layout';

export const IndexPageTemplate = ({ title }) => <div>{title}</div>;

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
};

const IndexPage = ({
  data: {
    markdownRemark: { frontmatter },
  },
}) => (
  <Layout>
    {' '}
    <IndexPageTemplate title={frontmatter.title} />{' '}
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
