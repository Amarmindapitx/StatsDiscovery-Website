// src/components/CallToAction/CallToAction.jsx

import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      {/* Decorative corner shapes */}
      <div className={`${styles.cornerShape} ${styles.bottomLeft}`}></div>
      <div className={`${styles.cornerShape} ${styles.topRight}`}></div>

      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>
          What Are You Waiting For? <br /> Try StatsDiscovery Today!
        </h2>
        <button className={styles.ctaButton}>Try it now</button>
      </div>
    </section>
  );
};

export default CallToAction;