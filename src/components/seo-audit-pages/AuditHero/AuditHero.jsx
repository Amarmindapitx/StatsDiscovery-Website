// src/components/AuditHero/AuditHero.jsx

"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './AuditHero.module.css';
// 1. Add the icon imports from the benefits component
import { FiLayers, FiCode, FiSearch, FiFileText } from 'react-icons/fi';

// 2. Add the benefits data array here
const benefits = [
  {
    icon: <FiLayers />,
    text: 'Our auditing algorithms have been battle tested through 10 years of reporting on millions of websites and are constantly being updated.'
  },
  {
    icon: <FiCode />,
    text: 'We use advanced Javascript rendering technology. Each website is loaded in a browser in the cloud so we can perform a realistic analysis.'
  },
  {
    icon: <FiSearch />,
    text: 'White Label SEO Reports can be branded and downloaded to PDF.'
  },
  {
    icon: <FiFileText />,
    text: 'You can generate SEO leads by Embedding an Audit Form onto your own site.'
  }
];

const AuditHero = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (websiteUrl) {
      alert(`Auditing: ${websiteUrl}`);
    }
  };

  return (
    // 3. Wrap everything in a React Fragment <>...</>
    <>
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>
            StatsDiscovery's <span className={styles.underline}>Famous</span> SEO Audit Tool
          </h1>
          <p className={styles.description}>
            Run more than 100 of the most important SEO checks on any website in around 20 seconds. Get a prioritized list of website improvements.
          </p>
          <p className={styles.promptText}>
            Try it now by entering your website:
          </p>
          <form onSubmit={handleSubmit} className={styles.auditForm}>
            <input
              type="text"
              placeholder="Example.com"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className={styles.urlInput}
            />
            <button type="submit" className={styles.auditButton}>
              Audit
            </button>
          </form>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/seo-audit-page/sa_en.png"
            alt="SEO Audit Tool Dashboard Preview"
            width={600}
            height={500}
            className={styles.heroImage}
          />
        </div>
      </section>

      {/* 4. Add the benefits section JSX here */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <p className={styles.cardText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AuditHero;