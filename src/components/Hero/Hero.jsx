"use client";

import { useState } from 'react'; // 1. Import useState
import { useRouter } from 'next/navigation';
import styles from './Hero.module.css';

const Hero = () => {
  const [domain, setDomain] = useState(''); // 2. Add state to store the input value
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (domain.trim()) { // Only redirect if the input is not empty
      // 3. Pass the domain as a query parameter in the URL
      router.push(`/dashboard?domain=${encodeURIComponent(domain)}`);
    } else {
      // Optional: handle empty input case, e.g., show an error
      alert("Please enter a domain.");
    }
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
          value={domain} // 4. Bind the input value to the state
          onChange={(e) => setDomain(e.target.value)} // 5. Update the state on change
        />
        <button type="submit" className={styles.auditButton}>
          Audit
        </button>
      </form>

      <p className={styles.formCaption}>
        Enter a URL address and get a Free Website Analysis!
      </p>
    </section>
  );
};

export default Hero;