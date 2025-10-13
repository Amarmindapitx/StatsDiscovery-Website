import Image from 'next/image';
import styles from './ResponsivenessFeature.module.css';

const ResponsivenessFeature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Device Responsiveness, PageSpeed & Core Web Vitals</h2>
        <p className={styles.paragraph}>
          Mobile usability is more important than ever. Google has moved to mobile first indexing, reflecting the reality that the majority of searches are now coming from mobile.
        </p>
        <p className={styles.paragraph}>
          StatsDiscovery's SEO Audit shows you how your site renders on mobile and tablet. We'll also show you your Google PageSpeed and Core Web Vitals scores instantly, as well as a number of other device specific checks.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_index_en.png"
          alt="Illustration of device responsiveness and pagespeed"
          width={550}
          height={450}
        />
      </div>
    </section>
  );
};

export default ResponsivenessFeature;