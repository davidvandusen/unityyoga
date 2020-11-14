import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import useSiteMetadata from '../components/useSiteMetadata';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const TeachersPageTemplate = ({ teachers, title }) => (
  <>
    <h1 className="main-heading">{title}</h1>
    {teachers.map(({ teacherBio, teacherName, teacherImage }) => (
      <article key={teacherName} className="teacher">
        <h1>{teacherName}</h1>
        <div className="teacher-content">
          <div className="teacher-image">
            <PreviewCompatibleImage alt={teacherName} src={teacherImage} />
          </div>
          <div className="teacher-bio">
            <ReactMarkdown>{teacherBio}</ReactMarkdown>
          </div>
        </div>
      </article>
    ))}
  </>
);

const TeachersPage = ({
  data: {
    markdownRemark: {
      frontmatter: { title, teachers },
    },
  },
}) => {
  const { title: siteTitle } = useSiteMetadata();
  return (
    <Layout withNav>
      {' '}
      <Helmet title={`${title} | ${siteTitle}`} />{' '}
      <TeachersPageTemplate teachers={teachers} title={title} />{' '}
    </Layout>
  );
};

export default TeachersPage;

export const teachersPageQuery = graphql`
  query teachersPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "TeachersPage" } }) {
      frontmatter {
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
