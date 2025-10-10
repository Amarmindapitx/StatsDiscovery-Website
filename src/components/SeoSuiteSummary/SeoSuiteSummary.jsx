// src/components/SeoSuiteSummary/SeoSuiteSummary.jsx

import styles from './SeoSuiteSummary.module.css'; // <-- Check this import

const SeoSuiteSummary = () => {
  return (
    <section className={styles.summarySection}> {/* <-- Check className={styles...} */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Complete, Affordable SEO Suite</h2>
        <p className={styles.description}>
          StatsDiscovery is famous for its SEO Auditing capabilities coupled with configurable White Label Reports and the ability to Embed Auditing into your site.
        </p>
        <p className={styles.description}>
          However, we’ve also built out a comprehensive suite of tools covering every SEO function, at a fraction of the cost of competing tools.
        </p>
      </div>
    </section>
  );
};

export default SeoSuiteSummary;