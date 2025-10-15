"use client";

import React, { useState } from 'react';
import styles from './KeywordAnalysis.module.css';

// Data for the "Top Keywords" section
const TABS = ['All(700)', 'New(215)', 'Improved(310)', 'Declined(140)', 'Lost(0)'];
const keywordsData = [
  { keyword: 'seo companies in mohali', pos: 4, volume: 40, cpc: 0.00, traffic: 12.16 },
  { keyword: 'chandigarh seo company', pos: 4, volume: 70, cpc: 0.00, traffic: 21.28 },
  { keyword: 'seo services mohali', pos: 4, volume: 40, cpc: 0.00, traffic: 12.16 },
  { keyword: 'seo discovery india', pos: 1, volume: 30, cpc: 0.00, traffic: 9.12 },
  { keyword: 'seo services company in india', pos: 5, volume: 210, cpc: 0.00, traffic: 34.02 },
];

// Data for the "Keywords by Intent" section
const intentData = [
  { intent: 'Informational', color: '#60a5fa', percentage: 17.86, keywords: 125, traffic: 976.78 },
  { intent: 'Navigational', color: '#a78bfa', percentage: 31.86, keywords: 223, traffic: 965.62 },
  { intent: 'Commercial', color: '#facc15', percentage: 44.00, keywords: 308, traffic: 1906.9 },
  { intent: 'Transactional', color: '#4ade80', percentage: 6.29, keywords: 44, traffic: 223.07 },
];

const KeywordAnalysis = () => {
  const [activeTab, setActiveTab] = useState('New(215)');

  return (
    <div className={styles.gridContainer}>
      {/* Top Keywords Card */}
      <div className={styles.card}>
        <h3 className={styles.title}>Top Keywords</h3>
        <div className={styles.tabs}>
          {TABS.map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? styles.activeTab : styles.tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Keyword</th>
                <th>Pos.</th>
                <th>Volume</th>
                <th>CPC (USD)</th>
                <th>Traffic %</th>
              </tr>
            </thead>
            <tbody>
              {keywordsData.map((item, index) => (
                <tr key={index}>
                  <td className={styles.keywordCell}>{item.keyword}</td>
                  <td>{item.pos}</td>
                  <td>{item.volume}</td>
                  <td>{item.cpc.toFixed(2)}</td>
                  <td>{item.traffic.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.footer}>
          <button className={styles.viewButton}>View new keywords</button>
        </div>
      </div>

      {/* Keywords by Intent Card */}
      <div className={styles.card}>
        <h3 className={styles.title}>Keywords by Intent</h3>
        <div className={styles.progressBar}>
          {intentData.map(item => (
            <div
              key={item.intent}
              style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
              className={styles.progressSegment}
            ></div>
          ))}
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Intent</th>
                <th></th>
                <th>Keywords</th>
                <th>Traffic</th>
              </tr>
            </thead>
            <tbody>
              {intentData.map((item) => (
                <tr key={item.intent}>
                  <td className={styles.intentCell}>
                    <span className={styles.colorDot} style={{ backgroundColor: item.color }}></span>
                    {item.intent}
                  </td>
                  <td>{item.percentage.toFixed(2)}%</td>
                  <td>{item.keywords}</td>
                  <td>{item.traffic.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.footer}>
          <button className={styles.viewButton}>View full report</button>
        </div>
      </div>
    </div>
  );
};

export default KeywordAnalysis;