// src/components/seo-audit-pages/KeywordRankings/KeywordRankings.jsx

import Image from 'next/image';
import styles from './KeywordRankings.module.css';

const KeywordRankings = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Keyword Rankings</h2>
        <p className={styles.paragraph}>
          The goal of SEO is to improve search engine rankings to drive more traffic to your site.
        </p>
        <p className={styles.paragraph}>
          Understanding your current keyword rankings is important to know where you stand before monitoring improvements.
        </p>
        <p className={styles.paragraph}>
          With each SEO Audit, StatsDiscovery will show you a summary of your site's ranking keywords by position, and their estimated search volumes and traffic.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_keywords_en.png"
          alt="Illustration of a keyword rankings report"
          width={550}
          height={450}
        />
      </div>
    </section>
  );
};

export default KeywordRankings;