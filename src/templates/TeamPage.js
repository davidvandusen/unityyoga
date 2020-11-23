import { graphql } from 'gatsby';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const TeamPageTemplate = ({ members, title }) => (
  <main className="main-content">
    <h1 className="main-heading">{title}</h1>
    {members.map(({ memberBio, memberName, memberImage }) => (
      <article key={memberName}>
        <h1>{memberName}</h1>
        <div className="member-image">
          <PreviewCompatibleImage alt={memberName} src={memberImage} />
        </div>
        <ReactMarkdown>{memberBio}</ReactMarkdown>
      </article>
    ))}
  </main>
);

const TeamPage = ({
  data: {
    markdownRemark: {
      frontmatter: { description, title, members },
    },
  },
}) => {
  return (
    <Layout description={description} title={title} withNav>
      {' '}
      <TeamPageTemplate members={members} title={title} />{' '}
    </Layout>
  );
};

export default TeamPage;

export const teamPageQuery = graphql`
  query teamPageQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "TeamPage" } }) {
      frontmatter {
        description
        members {
          memberBio
          memberImage {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          memberName
        }
        title
      }
    }
  }
`;
