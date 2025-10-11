// src/components/seo-audit-pages/AccessibilityFeature/AccessibilityFeature.jsx

import Image from 'next/image';
import styles from './AccessibilityFeature.module.css';

const AccessibilityFeature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_index_en.png"
          alt="Illustration about Search Engine Accessibility"
          width={500}
          height={400}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Search Engine Accessibility</h2>
        <p className={styles.paragraph}>
          A vital aspect of a page's ranking ability is ensuring that it can actually be accessed easily by search engines.
        </p>
        <p className={styles.paragraph}>
          We'll look for intentional signals like noindex tags that could cause Search Engines to ignore your site's pages entirely.
        </p>
      </div>
    </section>
  );
};

export default AccessibilityFeature;