import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const TeachersPageTemplate = ({ teachers, title }) => (
  <main className="main-content">
    <h1 className="main-heading">{title}</h1>
    {teachers.map(({ teacherBio, teacherName, teacherImage }) => (
      <article key={teacherName}>
        <h1>{teacherName}</h1>
        <div className="teacher-image">
          <PreviewCompatibleImage alt={teacherName} src={teacherImage} />
        </div>
        <ReactMarkdown>{teacherBio}</ReactMarkdown>
      </article>
    ))}
  </main>
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
              fluid(maxWidth: 400) {
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
