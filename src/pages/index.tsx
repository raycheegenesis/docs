import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Get started quickly</>,
    description: (url) => (
      <p>
        Our platform enables you to build quickly, but you need to get oriented before you can start. <Link to={url}>So start here.</Link>
      </p>
    ),
    url: '/getting-started/platform/'
  },
  {
    title: <>Platform reference</>,
    description: (url) => (
      <p>
        The server of a Genesis application can be as simple or complex as your needs. <Link to={url}>Take a look at the modules</Link> and the way they can be configured.
      </p>
    ),
    url: '/platform-reference/intro/'
  },
  {
    title: <>Tutorials</>,
    imageUrl: '',
    description: (url) => (
      <p>
        Want to know how to build a Genesis app? <Link to={url}>We'll take you from start to finish.</Link>
      </p>
    ),
    url: '/tutorials/building-an-application/intro/'
  },
];

const Feature = ({title, description, url}) => {
  const pageUrl = useBaseUrl(url);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <h2><Link to={pageUrl}>{title}</Link></h2>
      {description(pageUrl)}
    </div>
  );
}

const Home = () => {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const heroImage = useBaseUrl('img/screen1.png');
  const bgImage = useBaseUrl('img/bg.png');
  const platformImage = useBaseUrl('img/screen2.png');
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagLine}>
      <div className="homepage" style={{ '--homepage-bg': `url(${bgImage})` } as unknown}>
        <div className="hero">
          <div className="container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <img src={heroImage} alt="" />
            <div>
              <Link
                className='button button--secondary button--outline button--lg button--getting-started'
                to={useBaseUrl('getting-started/platform/')}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <main>
          {features && features.length > 0 && (
            <section className={styles.features}>
              <div className="container">
                <div className="row">
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
          <section className={styles.platform} style={{ '--platform-bg': `url(${platformImage})` } as unknown}>
            <div className="container">
              <div className="row">
                <div className="col col--8">
                  <h2>Getting to know the platform</h2>
                  <p><strong>The Genesis LCNC Platform is the only Low-Code/No-Code platform designed to build core, mission-critical systems for the financial markets.</strong></p>
                  <p>It enables you to develop and deploy your own applications at speed, from the simplest of internal systems to complete exchanges.</p>
                  <p>
                    <a href={useBaseUrl('getting-started/platform/')}>Read more...</a>
                  </p>
                  <Link
                    className='navbar__item navbar__link demo'
                    to="https://genesis.global/contact-us/">
                    Register for a Demo
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
