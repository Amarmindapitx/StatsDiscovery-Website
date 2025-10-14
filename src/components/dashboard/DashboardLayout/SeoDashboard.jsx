import React from 'react';
import Link from 'next/link';
import { FiCheckCircle } from 'react-icons/fi';
import styles from './DashboardLayout.module.css'; // We reuse the same styles

// Import all the necessary components for the SEO view
import ScoreGauge from '../ScoreGauge/ScoreGauge';
import StatCard from '../StatCard/StatCard';
import IntegrationCard from '../IntegrationCard/IntegrationCard';
import OrganicKeywordGrowthChart from '../OrganicKeywordsChart/OrganicKeywordsChart';
import KeywordAnalysis from '../KeywordAnalysis/KeywordAnalysis';
import BacklinksTable from '../BacklinksTable/BacklinksTable';
import SerpFeatures from '../SerpFeatures/SerpFeatures';
import LiveKeywordTracking from '../LiveKeywordTracking/LiveKeywordTracking';
import BacklinkProfile from '../BacklinkProfile/BacklinkProfile';

const SeoDashboard = () => {
  return (
    <>
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ScoreGauge score={91} />
          <p className={styles.scoreText}>Website score for <strong>seodiscovery.com</strong></p>
          <Link href="/seo-audit" className={styles.auditButton}>View Audit</Link>
          <div className={styles.checksList}>
            <div className={styles.checkItem}><span>Crawled pages</span> <span>100</span></div>
            <div className={styles.checkItem}><FiCheckCircle className={styles.checkIcon} /><span>Google indexable pages</span> <span>100</span></div>
            <div className={styles.checkItem}><FiCheckCircle className={styles.checkIcon} /><span>Google safe browsing</span> <span>Site is safe</span></div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <StatCard title="Organic Keywords" value="6944" />
          <StatCard title="Page Authority" value="44" />
          <StatCard title="Referring Domains" value="2456" />
          <StatCard title="Domain Authority" value="36" />
        </div>
      </div>

      <div className={styles.chartSection}><OrganicKeywordGrowthChart /></div>
      <div className={styles.analysisSection}><KeywordAnalysis /></div>
      <div className={styles.serpSection}><SerpFeatures /></div>
      <div className={styles.liveTrackingSection}><LiveKeywordTracking /></div>
      <div className={styles.backlinksSection}><BacklinksTable /></div>
      <div className={styles.backlinksSection}><BacklinkProfile /></div>
      <div className={styles.connectionsContainer}><IntegrationCard /></div>
    </>
  );
};

export default SeoDashboard;