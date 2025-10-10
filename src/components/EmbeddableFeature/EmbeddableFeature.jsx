
"use client";

import Image from 'next/image';
import styles from './EmbeddableFeature.module.css';

const EmbeddableFeature = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Check initiated!');
  };

  return (
    <section className={styles.embedSection}>
      <div className={styles.imageContainer}>
        {/* This is the background image showing the report */}
        <Image
          src="/assets/embeddable-tool.png"
          alt="Embeddable audit tool preview"
          width={600}
          height={650}
          className={styles.featureImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Embeddable Audit Tools
        </h2>
        <p className={styles.description}>
          Generate more leads straight from your website with your own Embedded SEO Audit Tool. Simply embed a simple Audit Form that matches your website’s styling and colors.
        </p>
        <p className={styles.description}>
          Present customers a beautiful branded audit that inspires action.
        </p>
        <p className={styles.description}>
          Get notified of new leads and their details straight to your mailbox.
        </p>
        <p className={styles.description}>
          Send your leads and their reports straight to any other CRM, Mail Tool like MailChimp, Active Campaign and Salesforce.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </section>
  );
};

export default EmbeddableFeature;