// src/components/pricing/PricingCard/PricingCard.jsx

import Link from 'next/link';
import styles from './PricingCard.module.css';

const PricingCard = ({ plan, billingCycle }) => {
  return (
    <div className={styles.card}>
      <div className={styles.badge} style={{ backgroundColor: plan.badgeColor }}>
        {plan.badgeText}
      </div>
      <div className={styles.priceSection}>
        <span className={styles.price}>${plan.price[billingCycle]}</span>
        <span className={styles.perMonth}>/ Month</span>
      </div>
      <p className={styles.idealFor}>{plan.idealFor}</p>
      <p className={styles.description}>{plan.description}</p>
      <Link href="/signup" className={styles.trialButton}>
        Free Trial
      </Link>
    </div>
  );
};

export default PricingCard;