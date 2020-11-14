import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
        frontmatter {
          socialImages {
            href
            image {
              childImageSharp {
                fluid(maxWidth: 159, maxHeight: 146, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          testimonialAttribution
          testimonial
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
  const { socialImages, testimonial, testimonialAttribution } = data.markdownRemark.frontmatter;
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
            {socialImages.map(({ href, image }) => (
              <div key={Math.random()} className="thumbnail">
                <a href={href}>
                  {' '}
                  <PreviewCompatibleImage alt="social image thumbnail" imageInfo={{ image }} />{' '}
                </a>
              </div>
            ))}
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
