// src/components/WhyChooseUs/WhyChooseUs.jsx

import styles from './WhyChooseUs.module.css';

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Why StatsDiscovery?</h2>
        <p className={styles.paragraph}>
          Getting your website to rank in Google is harder and more competitive than ever. There are many factors such as on page content, performance, social factors and backlink profile that search engines like Google use to determine which sites should rank highest.
        </p>
        <p className={styles.paragraph}>
          StatsDiscovery is a free SEO Audit Tool that will perform a detailed SEO Analysis across 100 website data points, and provide clear and actionable recommendations for steps you can take to improve your online presence and ultimately rank better in Search Engine Results. StatsDiscovery is ideal for website owners, website designers and digital agencies who want to improve their own sites or theirs of their clients.
        </p>
        <p className={styles.paragraph}>
          StatsDiscovery is better than other Website SEO Checkers through it’s super fast SEO analysis execution, JavaScript rendering and breadth of features.
        </p>
        <p className={styles.paragraph}>
          Additionally StatsDiscovery provides a range of free SEO Tools such as Backlink Checker, Meta Tags and Robots.txt Generator which will help take you through the actual steps of improving your site.
        </p>
        <p className={styles.paragraph}>
          Last but not least, the StatsDiscovery blog provides a bunch of relevant articles and tips and tricks for you to stay on top of the SEO improvement landscape.
        </p>
      </div>
    </section>
  );
};

// This is the line you need to add or fix
export default WhyChooseUs;