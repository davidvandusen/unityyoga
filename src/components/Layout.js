import { Helmet } from 'react-helmet';
import React from 'react';
import useSiteMetadata from './useSiteMetadata';
import { withPrefix } from 'gatsby';

import './all.scss';
import Footer from './Footer';
import Header from './Header';

const TemplateWrapper = ({ children, testimonial, testimonialAttribution }) => {
  const { title, description } = useSiteMetadata();
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
      <Header />
      <main className="container">{children}</main>
      <Footer testimonial={testimonial} testimonialAttribution={testimonialAttribution} />
    </div>
  );
};

export default TemplateWrapper;
