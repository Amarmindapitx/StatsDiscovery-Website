import React from 'react';
import Image from 'next/image'; // Using next/image for optimization
import styles from './IntegrationCard.module.css';

const IntegrationCard = ({ logoSrc, logoAlt, description, onConnect }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Image src={logoSrc} alt={logoAlt} width={110} height={38} className={styles.logo} />
        <p className={styles.description}>{description}</p>
      </div>
      <button onClick={onConnect} className={styles.connectButton}>
        Connect
      </button>
    </div>
  );
};

export default IntegrationCard;