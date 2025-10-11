
"use client";

import Image from 'next/image';
import styles from './EmbeddableFeature.module.css';
import { useRef } from 'react';
import { useState, useEffect } from 'react'; // Import React hooks

const EmbeddableFeature = () => {

  const[isVisible, setIsVisible]= useState(false);
  const sectionRef=useRef(null);
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


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Check initiated!');
  };

  return (
    <section ref={sectionRef} className={`${styles.featureSection} ${isVisible ? styles.isVisible : ''}`}>
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
    </section>
  );
};

export default EmbeddableFeature;