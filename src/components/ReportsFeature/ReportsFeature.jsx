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
          Beautiful, Branded, White Label PDF Reports
        </h2>
        <p className={styles.description}>
          Win more customers with a professional SEO Audit, written in simple language that inspires action.
        </p>
        <p className={styles.description}>
          Simply upload your logo, add company details and adjust styling to suit your brand. Generate PDF SEO Audits in 20 seconds.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </section>
  );
};

export default ReportsFeature;