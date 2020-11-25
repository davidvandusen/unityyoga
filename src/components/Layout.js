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
          {' '}
          <PreviewCompatibleImage alt={logoImageAlt} src={logoImage} />{' '}
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
              <Link className="site-navigation-link" to={linkPath}>
                {linkText}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}{' '}
    {children}
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
            <a href={socialHeadingHref}>
              {' '}
              <PreviewCompatibleImage alt={socialHeadingImageAlt} src={socialHeadingImage} />{' '}
            </a>
          </div>
          <ul className="site-footer-social-list">
            {socialImages.map(({ href, image }, index) => (
              <li
                key={String(Math.random())}
                className={`site-footer-social-item ${
                  index + 1 === socialImages.length && 'mobile-only'
                }`}
              >
                <a className="site-footer-social-link" href={href}>
                  <div className="site-footer-social-image">
                    <PreviewCompatibleImage alt="social image thumbnail" src={image} />
                  </div>
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={data.appleTouchIcon.childImageSharp.fixed.src}
        />
        <link
          rel="icon"
          type="image/png"
          href={data.favicon32.childImageSharp.fixed.src}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={data.favicon16.childImageSharp.fixed.src}
          sizes="16x16"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={data.title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={data.ogImage.childImageSharp.fixed.src} />
      </Helmet>{' '}
      <LayoutTemplate
        backgroundImage={data.backgroundImage}
        copyright={data.copyright}
        headingImage={data.headingImage}
        headingImageAlt={data.headingImageAlt}
        logoImage={data.logoImage}
        logoImageAlt={data.logoImageAlt}
        links={data.links}
        quoteImage={data.quoteImage}
        socialHeadingHref={data.socialHeadingHref}
        socialHeadingImage={data.socialHeadingImage}
        socialHeadingImageAlt={data.socialHeadingImageAlt}
        socialImages={data.socialImages}
        quote={data.quote}
        quoteAttribution={data.quoteAttribution}
        withNav={withNav}
      >
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
        }
        quote
        quoteAttribution
      }
    }
  }
`;

export default Layout;
