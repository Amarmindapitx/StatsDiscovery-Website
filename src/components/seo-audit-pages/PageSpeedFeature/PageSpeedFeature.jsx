// src/components/seo-audit-pages/PageSpeedFeature/PageSpeedFeature.jsx

import Image from 'next/image';
import styles from './PageSpeedFeature.module.css';

const PageSpeedFeature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_core_web_vitals_en.png"
          alt="Illustration of a Page Size & Load Speed report"
          width={550}
          height={450}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Page Size & Load Speed</h2>
        <p className={styles.paragraph}>
          Page load experience can directly impact your rankings.
        </p>
        <p className={styles.paragraph}>
          Search engines monitor whether users decide to stay on your site, and if the loading experience is bad, this can send them packing quickly.
        </p>
        <p className={styles.paragraph}>
          We'll show you all the critical metrics, exactly as a user would experience them, with pass and fail benchmarks, so you can take action.
        </p>
      </div>
    </section>
  );
};

export default PageSpeedFeature;