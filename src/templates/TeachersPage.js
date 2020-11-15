import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const TeachersPageTemplate = ({ teachers, title }) => (
  <>
    <h1>{title}</h1>
    {teachers.map(({ teacherBio, teacherName, teacherImage }) => (
      <article key={teacherName}>
        <h1>{teacherName}</h1>
        <PreviewCompatibleImage alt={teacherName} src={teacherImage} />{' '}
        <ReactMarkdown>{teacherBio}</ReactMarkdown>
      </article>
    ))}
  </>
);

const TeachersPage = ({
  data: {
    markdownRemark: {
      frontmatter: { description, title, teachers },
    },
  },
}) => {
  return (
    <Layout description={description} title={title} withNav>
      {' '}
      <TeachersPageTemplate teachers={teachers} title={title} />{' '}
    </Layout>
  );
};

export default TeachersPage;

export const teachersPageQuery = graphql`
  query teachersPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "TeachersPage" } }) {
      frontmatter {
        description
        teachers {
          teacherBio
          teacherImage {
            childImageSharp {
              fluid(maxWidth: 342) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          teacherName
        }
        title
      }
    }
  }
`;
