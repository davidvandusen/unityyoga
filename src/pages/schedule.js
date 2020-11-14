import Helmet from 'react-helmet';
import React from 'react';

import Layout from '../components/Layout';
import useSiteMetadata from '../components/useSiteMetadata';

const SchedulePage = () => {
  const { title } = useSiteMetadata();
  return (
    <Layout withNav>
      {' '}
      <Helmet>
        <title>Schedule and Passes | {title}</title>
        <meta
          content="Class schedule and fees for Unity Yoga powered by PunchPass"
          name="description"
        />
      </Helmet>
      <h1 className="main-heading">Schedule and Passes</h1>
      <iframe
        frameBorder="0"
        height="100"
        src="https://app.punchpass.com/embed/8932/iframe_buttons"
        title="Unity Yoga PunchPass buttons"
        width="100%"
      />
      <div className="desktop-only">
        <iframe
          frameBorder="0"
          height="1400"
          src="https://app.punchpass.com/org/8932/calendar?embed=true"
          title="Unity Yoga PunchPass calendar"
          width="100%"
        />
      </div>
      <iframe
        frameBorder="0"
        height="860"
        src="https://app.punchpass.com/org/8932/passes?embed=true"
        title="Unity Yoga buy PunchPass passes"
        width="100%"
      />
      <div className="mobile-only">
        <iframe
          frameBorder="0"
          height="860"
          src="https://app.punchpass.com/org/8932/classes?embed=true"
          title="Unity Yoga PunchPass class list"
          width="100%"
        />
      </div>
    </Layout>
  );
};

export default SchedulePage;
