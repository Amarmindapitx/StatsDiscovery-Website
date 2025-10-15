"use client";

import React from 'react';
import styles from './SerpFeatures.module.css';
import {
  FiInfo, FiStar, FiVideo, FiList, FiImage, FiMapPin, FiBriefcase,
  FiShare2, FiHelpCircle, FiShoppingCart, FiMap, FiFileText, FiCalendar, FiSend
} from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { IoReceiptOutline } from 'react-icons/io5';
import { BsLayoutTextWindow } from 'react-icons/bs';

// Data array to hold all the feature information for easy mapping
const serpFeaturesData = [
  { icon: FiStar, title: 'Reviews', keywords: 34 },
  { icon: FiVideo, title: 'Video', keywords: 173 },
  { icon: FiList, title: 'People also ask', keywords: 510 },
  { icon: FiImage, title: 'Images', keywords: 155 },
  { icon: FiMapPin, title: 'Local Pack', keywords: 236 },
  { icon: IoReceiptOutline, title: 'Recipes', keywords: 0 },
  { icon: BsLayoutTextWindow, title: 'Featured Snippets', keywords: 24 },
  { icon: FiBriefcase, title: 'Jobs', keywords: 2 },
  { icon: FiShare2, title: 'Knowledge Graph', keywords: 19 },
  { icon: FiHelpCircle, title: 'FAQ', keywords: 0 },
  { icon: FiShoppingCart, title: 'Shopping', keywords: 0 },
  { icon: FaXTwitter, title: 'X (ex-Twitter)', keywords: 1 },
  { icon: FiMap, title: 'Map', keywords: 0 },
  { icon: FiFileText, title: 'Top Stories', keywords: 1 },
  { icon: FiList, title: 'Carousel', keywords: 0 },
  { icon: FiFileText, title: 'Find result on', keywords: 0 },
  { icon: FiCalendar, title: 'Events', keywords: 0 },
  { icon: FiSend, title: 'Flights', keywords: 0 },
];

const SerpFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>SERP features</h2>
        <FiInfo className={styles.infoIcon} />
      </div>
      <div className={styles.grid}>
        {serpFeaturesData.map((item, index) => (
          <div
            key={index}
            // Add a "disabled" class if the keyword count is 0
            className={`${styles.featureCard} ${item.keywords === 0 ? styles.disabledCard : ''}`}
          >
            <item.icon className={styles.icon} />
            <div className={styles.textContainer}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardKeywords}>Keywords: {item.keywords}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SerpFeatures;