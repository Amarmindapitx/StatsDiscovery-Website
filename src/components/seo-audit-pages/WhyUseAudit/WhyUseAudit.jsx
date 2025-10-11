// src/components/WhyUseAudit/WhyUseAudit.jsx

import Image from 'next/image';
import styles from './WhyUseAudit.module.css';

const WhyUseAudit = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.mainHeading}>Why use StatsDiscovery's Audit Tool?</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/seo-audit-page/sa_improve_seo_en.png"
            alt="Illustration of improving SEO rankings"
            width={450}
            height={450}
          />
        </div>
        <div className={styles.textContainer}>
          <h3 className={styles.subHeading}>Improve a Site’s SEO Rankings</h3>
          <p className={styles.paragraph}>
            Is your site not getting the rankings and search traffic it deserves?
          </p>
          <p className={styles.paragraph}>
            Many sites have simple things that are holding back their ranking potential that StatsDiscovery can point out.
          </p>
          <p className={styles.paragraph}>
            We've curated over 100 comprehensive website checks from studying a decade of SEO research and advice from experts.
          </p>
          <p className={styles.paragraph}>
            With each SEO Audit you’ll get insights on your website’s On-Page SEO, Rankings, Backlink Profile, Mobile Usability, Performance, and more.
          </p>
        </div>
      </div>
    </section>
  );
};

// This is the line that needs to be added or fixed
export default WhyUseAudit;