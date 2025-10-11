// src/components/seo-audit-pages/BacklinksFeature/BacklinksFeature.jsx

import Image from 'next/image';
import styles from './BacklinksFeature.module.css';

const BacklinksFeature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_links_en.png"
          alt="Illustration of a backlinks report"
          width={550}
          height={450}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Off-Page / Backlinks</h2>
        <p className={styles.paragraph}>
          Your site's backlink profile has a disproportionate impact on your rankings, as search engines continue to use this as the primary factor in their search engine algorithms.
        </p>
        <p className={styles.paragraph}>
          Our SEO Audit tool instantly shows your critical metrics such as total backlinks, referring domains and Domain Authority, as well as a sample of your most valuable backlinks.
        </p>
      </div>
    </section>
  );
};

export default BacklinksFeature;