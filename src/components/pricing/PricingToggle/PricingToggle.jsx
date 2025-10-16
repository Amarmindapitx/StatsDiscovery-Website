// src/components/pricing/PricingToggle/PricingToggle.jsx

"use client";

import styles from './PricingToggle.module.css';

const PricingToggle = ({ billingCycle, onToggle }) => {
  return (
    <div className={styles.toggleContainer}>
      <button
        onClick={() => onToggle('monthly')}
        className={billingCycle === 'monthly' ? styles.selected : ''}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle('annual')}
        className={billingCycle === 'annual' ? styles.selected : ''}
      >
        Annual
      </button>
      <span className={styles.discountBadge}>25% OFF</span>
    </div>
  );
};

// This is the line that needs to be added or fixed
export default PricingToggle;