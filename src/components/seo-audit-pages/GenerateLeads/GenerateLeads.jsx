// src/components/seo-audit-pages/GenerateLeads/GenerateLeads.jsx

import Image from 'next/image';
import styles from './GenerateLeads.module.css';

const GenerateLeads = () => {
  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Generate Leads for your Agency</h2>
        <p className={styles.paragraph}>
          Do you work on client's websites as a marketer, freelancer or agency? This is the tool for you.
        </p>
        <p className={styles.paragraph}>
          Audits make great conversation starters with prospects by highlighting deficits within their site that your services can improve.
        </p>
        <p className={styles.paragraph}>
          Send branded PDF reports with relevant information that inspires action.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/seo-audit-page/sa_lead_gen_en.png" // Make sure to add this image
          alt="Illustration showing lead generation form and report"
          width={550}
          height={450}
        />
      </div>
    </section>
  );
};

export default GenerateLeads;