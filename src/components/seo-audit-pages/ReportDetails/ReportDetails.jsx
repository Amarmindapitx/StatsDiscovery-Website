// src/components/seo-audit-pages/ReportDetails/ReportDetails.jsx

import Image from 'next/image';
import styles from './ReportDetails.module.css';

const ReportDetails = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>What's in the report?</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h3 className={styles.subHeading}>On-Page SEO</h3>
          <p className={styles.paragraph}>
            Simple content and HTML improvements on a website are the starting point for any SEO success.
          </p>
          <p className={styles.paragraph}>
            We'll check every aspect of your website's On-Page SEO including header tag usage, keyword consistency and distribution, image alt attributes, canonical tags, and much more.
          </p>
          <p className={styles.paragraph}>
            Don't get left in the dark, our SEO Audit tool also provides pointers and guides on how to fix these issues for your specific CRM.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/seo-audit-page/sa_onpage_seo_en.png" // Make sure to add this image
            alt="Details of an on-page SEO report"
            width={550}
            height={450}
          />
        </div>
      </div>
    </section>
  );
};

export default ReportDetails;