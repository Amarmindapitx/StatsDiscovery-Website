// src/components/ReportsFeature/ReportsFeature.jsx

import Image from 'next/image';
import styles from './ReportsFeature.module.css';

const ReportsFeature = () => {
  return (
    <section className={styles.reportsSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/pdf-reports-mockup.png"
          alt="Mockups of branded white label PDF reports"
          width={600}
          height={550}
          className={styles.featureImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
        A Powerful Dashboard Built for Agencies
        </h2>
        <p className={styles.description}>
        Simplify your client SEO reporting and save hundreds of hours on manual audits. The agency dashboard allows you to manage multiple clients from a single interface, improving transparency and workflow.</p>
        <p className={styles.description}>
        Track performance with an easy-to-read leaderboard that shows your best to worst performing sites. You can also schedule daily or weekly re-audits to automatically monitor your clients' SEO health over time.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </section>
  );
};

export default ReportsFeature;