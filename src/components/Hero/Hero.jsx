"use client";

import { useRouter } from 'next/navigation'; 
import styles from './Hero.module.css';

const Hero = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = (event) => {
    event.preventDefault();
    // Instead of an alert, redirect to the /dashboard page
    router.push('/dashboard');
  };

  return (
    <section className={styles.heroSection}>
      <h1 className={styles.mainHeading}>SEO Audit & Reporting Tool</h1>
      <p className={styles.subHeading}>+ Comprehensive SEO Toolset</p>

      <form className={styles.auditForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Example.com"
          className={styles.urlInput}
        />
        <button type="submit" className={styles.auditButton}>
          Audit
        </button>
      </form>

      <p className={styles.formCaption}>
        Enter an URL address and get a Free Website Analysis!
      </p>
    </section>
  );
};

export default Hero;