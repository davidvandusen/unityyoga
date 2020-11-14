import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
        frontmatter {
          testimonialAttribution
          testimonial
          title
        }
      }
      mobileQuoteImage: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fixed(width: 29, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      desktopQuoteImage: file(relativePath: { eq: "quote.png" }) {
        childImageSharp {
          fixed(width: 35, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      mobileHashtagImage: file(relativePath: { eq: "inharmonywithnature.png" }) {
        childImageSharp {
          fixed(width: 196, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      desktopHashtagImage: file(relativePath: { eq: "inharmonywithnature.png" }) {
        childImageSharp {
          fixed(width: 242, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  const { testimonial, testimonialAttribution } = data.markdownRemark.frontmatter;
  return (
    <footer className="site-footer container">
      <div className="site-footer-content">
        {testimonial && testimonialAttribution && (
          <section className="site-footer-testimonial">
            <blockquote className="site-footer-testimonial-quote">
              <div className="site-footer-testimonial-quote-image">
                <Img
                  alt="open quotation"
                  fixed={[
                    data.mobileQuoteImage.childImageSharp.fixed,
                    {
                      ...data.desktopQuoteImage.childImageSharp.fixed,
                      media: '(min-width: 768px)',
                    },
                  ]}
                />
              </div>
              <p>{testimonial}</p>
              <p>
                <b>{testimonialAttribution}</b>
              </p>
            </blockquote>
          </section>
        )}
        <section className="site-footer-thumbnails">
          <div className="site-footer-thumbnails-heading">
            <a href="https://www.instagram.com/explore/tags/inharmonywithnature/">
              {' '}
              <Img
                alt="#inharmonywithnature"
                fixed={[
                  data.mobileHashtagImage.childImageSharp.fixed,
                  {
                    ...data.desktopHashtagImage.childImageSharp.fixed,
                    media: '(min-width: 768px)',
                  },
                ]}
              />{' '}
            </a>
          </div>
          <div className="site-footer-thumbnails-images">
            <div className="thumbnail-row">
              <div className="thumbnail">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
              <div className="thumbnail">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
              <div className="thumbnail">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
            </div>
            <div className="thumbnail-row">
              <div className="thumbnail">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
              <div className="thumbnail">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
              <div className="thumbnail mobile-only">
                <img alt="thumbnail" src="https://placehold.it/159x146" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="site-footer-meta">
        <small className="legal">© 2020 Unity Yoga</small>
      </section>
    </footer>
  );
};

export default Footer;
