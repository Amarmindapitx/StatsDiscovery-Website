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
        <h2 className={styles.heading}>SEO Audits with Ease</h2>
        <p className={styles.description}>
          Search Engines rely on many factors to rank a website. StatsDiscovery is a Website SEO Checker which reviews these and more to help identify problems that could be holding your site back from its potential.
        </p>
        <p className={styles.description}>
          Additionally we provide a clear, actionable, prioritised list of recommendations to help improve.
        </p>
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