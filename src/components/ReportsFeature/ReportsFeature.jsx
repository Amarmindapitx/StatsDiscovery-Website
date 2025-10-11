"use client"; 

import { useState, useRef, useEffect } from 'react'; // Import React hooks
import Image from 'next/image';
import styles from './ReportsFeature.module.css';

const ReportsFeature = () => {
  // FIX 2: Define the state and ref variables
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
      // The observer can be null if the component unmounts before the ref is set
      if (observer && sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    // FIX 3: Use a single <section> as the root element with all necessary props
    <section 
      ref={sectionRef} 
      className={`${styles.reportsSection} ${isVisible ? styles.isVisible : ''}`}
    >
      <div className={styles.imageContainer}>
        <Image
          src="/assets/pdf-reports-mockup.png"
          alt="Mockups of branded white label PDF reports"
          width={600}
          height={550}
          className={styles.featureImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          A Powerful Dashboard Built for Agencies
        </h2>
        <p className={styles.description}>
          Simplify your client SEO reporting and save hundreds of hours on manual audits. The agency dashboard allows you to manage multiple clients from a single interface, improving transparency and workflow.
        </p>
        <p className={styles.description}>
          Track performance with an easy-to-read leaderboard that shows your best to worst performing sites. You can also schedule daily or weekly re-audits to automatically monitor your clients' SEO health over time.
        </p>
        <button className={styles.learnMoreButton}>Learn More</button>
      </div>
      {/* FIX 4: Removed the stray '/>' tag that was here */}
    </section>
  );
};

export default ReportsFeature;