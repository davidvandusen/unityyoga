import { graphql, Link, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import React from 'react';

// import './all.scss';
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
  testimonial,
  testimonialAttribution,
  withNav = false,
}) => (
  <>
    <header className="site-header">
      <div className="site-header-background">
        <PreviewCompatibleImage alt="background image" src={backgroundImage} />
      </div>
      <div className="site-header-branding">
        <Link to="/">
          {' '}
          <PreviewCompatibleImage alt={logoImageAlt} src={logoImage} />{' '}
        </Link>
      </div>
      <div className="site-header-heading">
        <PreviewCompatibleImage alt={headingImageAlt} src={headingImage} />
      </div>
    </header>
    {withNav && (
      <nav className="site-navigation">
        {links.map(({ linkText, linkPath }) => (
          <Link key={JSON.stringify({ linkPath, linkText })} to={linkPath}>
            {linkText}
          </Link>
        ))}
      </nav>
    )}
    <main className="container">{children}</main>
    <footer className="site-footer container">
      <div className="site-footer-content">
        {testimonial && testimonialAttribution && (
          <section className="site-footer-testimonial">
            <blockquote className="site-footer-testimonial-quote">
              <div className="site-footer-testimonial-quote-image">
                <PreviewCompatibleImage alt="open quotation" src={quoteImage} />
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
            <a href={socialHeadingHref}>
              {' '}
              <PreviewCompatibleImage alt={socialHeadingImageAlt} src={socialHeadingImage} />{' '}
            </a>
          </div>
          <div className="site-footer-thumbnails-images">
            {socialImages.map(({ href, image }) => (
              <div key={String(Math.random())} className="thumbnail">
                <a href={href}>
                  {' '}
                  <PreviewCompatibleImage alt="social image thumbnail" src={image} />{' '}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="site-footer-meta">
        <small className="legal">{copyright}</small>
      </section>
    </footer>
  </>
);

const Layout = ({ children, withNav = false }) => {
  const {
    markdownRemark: { frontmatter: data },
  } = useStaticQuery(layoutQuery);
  return (
    <>
      <Helmet>
        <html lang="en" />
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
        testimonial={data.testimonial}
        testimonialAttribution={data.testimonialAttribution}
        withNav={withNav}
      >
        {children}
      </LayoutTemplate>
    </>
  );
};

const layoutQuery = graphql`
  query {
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
              ...GatsbyImageSharpFixed_withWebp
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
            fluid(maxWidth: 394, quality: 100) {
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
            fixed(width: 100, quality: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
        logoImageAlt
        ogImage: logoImage {
          childImageSharp {
            fixed(width: 1200, height: 627, quality: 100) {
              src
            }
          }
        }
        quoteImage {
          childImageSharp {
            fluid(maxWidth: 35, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
        socialHeadingHref
        socialHeadingImage {
          childImageSharp {
            fluid(maxWidth: 242, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
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
        testimonial
        testimonialAttribution
      }
    }
  }
`;

export default Layout;
