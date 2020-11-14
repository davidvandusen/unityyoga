import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import Layout from '../components/Layout';
import Teacher from '../components/Teacher';
import useSiteMetadata from '../components/useSiteMetadata';

const TeachersPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const { title } = useSiteMetadata();
  return (
    <Layout withNav>
      {' '}
      <Helmet title={`Teachers | ${title}`} />
      <h1 className="main-heading">Teachers</h1>
      {edges
        .map(({ node }) => node)
        .map(({ frontmatter: { title: teacherName, teacherImage }, html: bioHtml }) => (
          <Teacher
            key={teacherName}
            bioHtml={bioHtml}
            teacherImage={teacherImage}
            teacherName={teacherName}
          />
        ))}
    </Layout>
  );
};

export default TeachersPage;

export const teachersPageQuery = graphql`
  query teachersPageQuery {
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { frontmatter: { collection: { eq: "teachers" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            teacherImage {
              childImageSharp {
                fluid(maxWidth: 342) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
