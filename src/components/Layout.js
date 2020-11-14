import { graphql, Link, useStaticQuery, withPrefix } from 'gatsby';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
import React from 'react';
import useSiteMetadata from './useSiteMetadata';

import './all.scss';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const Layout = ({ children, withNav = false }) => {
  const { title, description } = useSiteMetadata();
  const data = useStaticQuery(graphql`
    query {
      navigation: markdownRemark(frontmatter: { title: { eq: "Navigation" } }) {
        frontmatter {
          links {
            linkPath
            linkText
          }
        }
      }
      footer: markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
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
          testimonial
          testimonialAttribution
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
      logoImage: file(relativePath: { eq: "unity.png" }) {
        childImageSharp {
          fixed(width: 100, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      mobileHeadingImage: file(relativePath: { eq: "yoga-tea-and-good-company.png" }) {
        childImageSharp {
          fixed(width: 250, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
      desktopHeadingImage: file(relativePath: { eq: "yoga-tea-and-good-company.png" }) {
        childImageSharp {
          fixed(width: 394, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>{' '}
      <header className="site-header">
        <div className="site-header-branding">
          <Link to="/">
            {' '}
            <Img alt="Unity" fixed={data.logoImage.childImageSharp.fixed} />{' '}
          </Link>
        </div>
        <div className="site-header-heading">
          <Img
            alt="Yoga, Tea &amp; Good Company..."
            fixed={[
              data.mobileHeadingImage.childImageSharp.fixed,
              { ...data.desktopHeadingImage.childImageSharp.fixed, media: '(min-width: 769px)' },
            ]}
          />
        </div>
      </header>
      {withNav && (
        <nav className="site-navigation">
          {data.navigation.frontmatter.links.map(({ linkText, linkPath }) => (
            <Link key={linkPath} to={linkPath}>
              {linkText}
            </Link>
          ))}
        </nav>
      )}
      <main className="container">{children}</main>
      <footer className="site-footer container">
        <div className="site-footer-content">
          {data.footer.frontmatter.testimonial && data.footer.frontmatter.testimonialAttribution && (
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
                <p>{data.footer.frontmatter.testimonial}</p>
                <p>
                  <b>{data.footer.frontmatter.testimonialAttribution}</b>
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
              {data.footer.frontmatter.socialImages.map(({ href, image }) => (
                <div key={Math.random()} className="thumbnail">
                  <a href={href}>
                    {' '}
                    <PreviewCompatibleImage
                      alt="social image thumbnail"
                      imageInfo={{ image }}
                    />{' '}
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
    </div>
  );
};

export default Layout;
