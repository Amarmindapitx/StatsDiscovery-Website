// src/components/FeatureSection/FeatureSection.jsx

"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 1. Import the Link component
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.featureSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>A Complete, 360-Degree SEO Analysis</h2>
        <p className={styles.description}>
          StatsDiscovery performs a detailed SEO Analysis across 100 website data points. We provide a comprehensive view of your site's health by combining On-Page analysis, Core Web Vitals, backlinks insights, and usability and security checks.
        </p>
        <p className={styles.description}>
          Receive a clear A-F grade with a weighted score to instantly understand your site’s performance. Every check includes clear, actionable recommendations that guide you through the actual steps of improving your site.
        </p>

        {/* 2. Replace the <button> with a <Link> component */}
        <Link href="/seo-audit" className={styles.learnMoreButton}>
          Learn More
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/feature-dashboard.png"
          alt="Dashboard showing SEO recommendations"
          width={700}
          height={550}
          className={styles.featureImage}
        />
      </div>
    </section>
  );
};

export default FeatureSection;