// src/components/FeatureSection/FeatureSection.jsx

"use client"; // This makes it a Client Component

import { useState, useEffect, useRef } from 'react'; // Import React hooks
import Image from 'next/image';
import styles from './FeatureSection.module.css';

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the component is visible on screen
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
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
    // Add the ref and conditional isVisible class here
    <section ref={sectionRef} className={`${styles.featureSection} ${isVisible ? styles.isVisible : ''}`}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>A Complete, 360-Degree SEO Analysis</h2>
        <p className={styles.description}>
        StatsDiscovery performs a detailed SEO Analysis across 100 website data points. We provide a comprehensive view of your site's health by combining On-Page analysis, Core Web Vitals, backlinks insights, and usability and security checks.</p>
        <p className={styles.description}>
        Receive a clear A-F grade with a weighted score to instantly understand your site’s performance. Every check includes clear, actionable recommendations that guide you through the actual steps of improving your site.        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/feature-dashboard.png" // Make sure this path is correct
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