
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
        Turn your website into a powerful lead generation engine with StatsDiscovery’s Embeddable SEO Audit Form. Effortlessly integrate a lightweight, customizable audit form that perfectly matches your site’s design, colors, and branding.
        </p>
        <p className={styles.description}>
        Deliver instant, white-labeled SEO reports that not only impress visitors but also convert them into qualified leads.
        </p>
        <p className={styles.description}>
        Receive real-time notifications for every new audit request, complete with lead details sent straight to your inbox.
        </p>
        <p className={styles.description}>
        Seamlessly connect with your favorite CRM and email marketing platforms like Mailchimp, ActiveCampaign, Salesforce, and more — so every lead flows smoothly into your sales funnel.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
    </section>
  );
};

export default EmbeddableFeature;