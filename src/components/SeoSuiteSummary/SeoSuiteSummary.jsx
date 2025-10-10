// src/components/SeoSuiteSummary/SeoSuiteSummary.jsx

import styles from './SeoSuiteSummary.module.css'; // <-- Check this import

const SeoSuiteSummary = () => {
  return (
    <section className={styles.summarySection}> {/* <-- Check className={styles...} */}
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>Complete, Affordable SEO Suite</h2>
        <p className={styles.description}>
        StatsDiscovery is renowned for its powerful SEO auditing features, flexible white-label reporting, and seamless website embedding options that help agencies and businesses deliver value instantly.        </p>
        <p className={styles.description}>
        But that’s just the beginning.
        We’ve designed a comprehensive, all-in-one SEO toolkit that covers everything — from on-page optimization and Core Web Vitals analysis to backlink insights, usability checks, and performance scoring — all at a fraction of the cost of competing platforms.
        With StatsDiscovery, you get enterprise-grade SEO intelligence without the enterprise-level price tag.        </p>
      </div>
    </section>
  );
};

export default SeoSuiteSummary;