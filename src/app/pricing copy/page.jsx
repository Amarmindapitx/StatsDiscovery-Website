"use client";

import { useState } from 'react';
import styles from './pricing-page.module.css';
import PricingToggle from '@/components/pricing/PricingToggle/PricingToggle';
import PricingCard from '@/components/pricing/PricingCard/PricingCard';

const pricingData = [
  {
    badgeText: 'DIY SEO',
    badgeColor: '#ef4444', // Red
    price: { monthly: 29, annual: 21 },
    idealFor: 'IDEAL FOR YOUR WEBSITE',
    description:
      'Simple Do-It-Yourself SEO Software that crawls your site for problems, recommends tasks and tracks rankings.',
  },
  {
    badgeText: 'White Label',
    badgeColor: '#22c55e', // Green
    price: { monthly: 39, annual: 29 },
    idealFor: 'GREAT FOR MARKETERS',
    description:
      'Generate White Label PDF Reports with your own company logo, branding, text and check selections in 15 languages. Crawl Multiple Websites for issues.',
  },
  {
    badgeText: 'White Label & Embedding',
    badgeColor: '#eab308', // Yellow
    price: { monthly: 59, annual: 44 },
    idealFor: 'AWESOME FOR AGENCIES',
    description:
      'All "White Label" features + build a custom Embed Audit Form to generate leads straight from your site, and send them to your inbox or other systems.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <div className={styles.pageContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Products and Pricing</h1>
        <div className={styles.trialBadge}>14 DAY FREE TRIAL</div>
      </div>

      {/* ✅ Make sure the imported component is a valid function */}
      <PricingToggle billingCycle={billingCycle} onToggle={setBillingCycle} />

      <div className={styles.cardsGrid}>
        {pricingData.map((plan) => (
          <PricingCard
            key={plan.badgeText}
            plan={plan}
            billingCycle={billingCycle}
          />
        ))}
      </div>
    </div>
  );
}
