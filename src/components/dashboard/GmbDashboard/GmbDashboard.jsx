import React from 'react';
import IntegrationCard from '../IntegrationCard/IntegrationCard';
import { LOGO_GOOGLE_MY_BUSINESS } from '@/config/images'; // We'll add this to our global images file
import styles from './GmbDashboard.module.css';

const GmbDashboard = () => {
  const handleConnectGMB = () => {
    console.log('Connect to Google My Business');
    // Add your connection logic here
  };

  return (
    <div className={styles.container}>
      <IntegrationCard
        logoSrc={LOGO_GOOGLE_MY_BUSINESS}
        logoAlt="Google My Business Logo"
        description="To get insights about performance of your Google My Business page and build reports for your GMB dashboard."
        onConnect={handleConnectGMB}
      />
    </div>
  );
};

export default GmbDashboard;