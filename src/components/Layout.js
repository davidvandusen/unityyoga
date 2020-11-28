import { graphql, Link, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

import './all.scss';
import PreviewCompatibleImage from './PreviewCompatibleImage';

export const LayoutTemplate = ({
  backgroundImage,
  children,
  copyright,
  headingImage,
  headingImageAlt,
  links,
  logoImage,
  logoImageAlt,
  quoteImage,
  socialHeadingHref,
  socialHeadingImage,
  socialHeadingImageAlt,
  socialImages,
  quote,
  quoteAttribution,
  withNav = false,
}) => (
  <>
    <header className="site-header">
      <div className="site-header-background">
        <PreviewCompatibleImage alt="background image" src={backgroundImage} />{' '}
      </div>
      <div className="site-header-branding">
        <Link to="/">
          {' '} <PreviewCompatibleImage alt={logoImageAlt} src={logoImage} />{' '}
        </Link>{' '}
      </div>
      <div className="site-header-heading">
        <PreviewCompatibleImage alt={headingImageAlt} src={headingImage} />
      </div>
    </header>
    {withNav && (
      <nav className="site-navigation">
        <ul className="site-navigation-list">
          {links.map(({ linkText, linkPath }) => (
            <li key={JSON.stringify({ linkPath, linkText })} className="site-navigation-item">
              <Link className="site-navigation-link" activeClassName="active" to={linkPath}>
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}{' '} {children}
    <footer className="site-footer">
      <div className="site-footer-content">
        <section className="site-footer-quote">
          <blockquote className="site-footer-quote-blockquote">
            <div className="site-footer-quote-image">
              <PreviewCompatibleImage alt="open quotation" src={quoteImage} />
            </div>
            <p>{quote}</p>
            <p>
              <b>{quoteAttribution}</b>
            </p>
          </blockquote>
        </section>
        <section className="site-footer-social">
          <div className="site-footer-social-heading">
            <a href={socialHeadingHref}><PreviewCompatibleImage alt={socialHeadingImageAlt} src={socialHeadingImage} /></a>
          </div>
          <ul className="site-footer-social-list">
            {socialImages.map(({ href, image, logo, text }) => (
              <li key={String(Math.random())} className="site-footer-social-item">
                <a className="site-footer-social-link" href={href}>
                  <div className="site-footer-social-image">
                    <PreviewCompatibleImage alt="social image thumbnail" src={image} />
                  </div>
                  {!!(logo || text) && (
                    <div className="site-footer-social-caption">
                      {!!logo && (
                        <div className="site-footer-social-logo">
                          {logo === 'Instagram' && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                              <path d="M50.09,0h-39A11,11,0,0,0,0,10.81v38A11,11,0,0,0,11.1,59.58h39a11,11,0,0,0,11.1-10.81v-38A11,11,0,0,0,50.09,0Zm-7.2,8.37A2.39,2.39,0,0,1,45.4,6h7.29a2.35,2.35,0,0,1,2.5,2.35v7a2.35,2.35,0,0,1-2,2.32,2.42,2.42,0,0,1-.47,0H45.38a2.45,2.45,0,0,1-2.47-2,1.83,1.83,0,0,1,0-.33Zm-12.3,9.31c6.8,0,12.3,5.23,12.3,11.68S37.39,41,30.59,41,18.31,35.82,18.3,29.36,23.7,17.69,30.59,17.68ZM55.19,25V50.37a2.35,2.35,0,0,1-2,2.29,4.12,4.12,0,0,1-.7.05H8.67a3.45,3.45,0,0,1-1-.11,2.35,2.35,0,0,1-1.7-2c0-.12,0-.25,0-.37V24.7h5.55a17.6,17.6,0,0,0,1.9,13.82,18.84,18.84,0,0,0,7.68,7.22A19.78,19.78,0,0,0,31.55,48a19.71,19.71,0,0,0,14.88-7.56A17.86,17.86,0,0,0,49.65,24.7h5.54Z" />
                            </svg>
                          )}{' '} {logo === 'Facebook' && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-15 0 60 60">
                            <path d="M6.44,12.55v8.92H0V32.39H6.44V62.33H19.66V32.39h8.88s.83-5.24,1.23-11H19.71V14a3.15,3.15,0,0,1,2.87-2.62h7.21V0H20C6.11,0,6.44,10.92,6.44,12.55Z" />
                          </svg>
                        )}
                        </div>
                      )}{' '} {text}
                    </div>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <section className="site-footer-meta">
        <p>
          <small>{copyright}</small>
        </p>
      </section>
    </footer>
  </>
);

const Layout = ({ children, description = '', title = '', withNav = false }) => {
  const {
    markdownRemark: { frontmatter: data },
    site: {
      siteMetadata: { description: siteDescription, title: siteTitle },
    },
  } = useStaticQuery(layoutQuery);
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <meta name="description" content={description || siteDescription} />
        <link rel="apple-touch-icon" sizes="180x180" href={data.appleTouchIcon.childImageSharp.fixed.src} />
        <link rel="icon" type="image/png" href={data.favicon32.childImageSharp.fixed.src} sizes="32x32" />
        <link rel="icon" type="image/png" href={data.favicon16.childImageSharp.fixed.src} sizes="16x16" />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={data.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={data.ogImage.childImageSharp.fixed.src} />
      </Helmet>{' '} <LayoutTemplate backgroundImage={data.backgroundImage} copyright={data.copyright} headingImage={data.headingImage} headingImageAlt={data.headingImageAlt} logoImage={data.logoImage} logoImageAlt={data.logoImageAlt} links={data.links} quoteImage={data.quoteImage} socialHeadingHref={data.socialHeadingHref} socialHeadingImage={data.socialHeadingImage} socialHeadingImageAlt={data.socialHeadingImageAlt} socialImages={data.socialImages} quote={data.quote} quoteAttribution={data.quoteAttribution} withNav={withNav}>
      {children}
    </LayoutTemplate>
    </>
  );
};

const layoutQuery = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        description
        title
      }
    }
    markdownRemark(frontmatter: { title: { eq: "Layout" } }) {
      frontmatter {
        appleTouchIcon: logoImage {
          childImageSharp {
            fixed(width: 180, height: 180, quality: 100) {
              src
            }
          }
        }
        backgroundImage {
          childImageSharp {
            fixed(width: 1366, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        copyright
        favicon16: logoImage {
          childImageSharp {
            fixed(width: 16, height: 16, quality: 100) {
              src
            }
          }
        }
        favicon32: logoImage {
          childImageSharp {
            fixed(width: 32, height: 32, quality: 100) {
              src
            }
          }
        }
        headingImage {
          childImageSharp {
            fluid(maxWidth: 350, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        headingImageAlt
        links {
          linkPath
          linkText
        }
        logoImage {
          childImageSharp {
            fixed(width: 133, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        logoImageAlt
        ogImage: logoImage {
          childImageSharp {
            fixed(width: 400, height: 400, quality: 100) {
              src
            }
          }
        }
        quoteImage {
          childImageSharp {
            fixed(width: 34, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        socialHeadingHref
        socialHeadingImage {
          childImageSharp {
            fixed(width: 242, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        socialHeadingImageAlt
        socialImages {
          href
          image {
            childImageSharp {
              fluid(maxWidth: 159, maxHeight: 146, cropFocus: CENTER) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          logo
          text
        }
        quote
        quoteAttribution
      }
    }
  }
`;

export default Layout;
