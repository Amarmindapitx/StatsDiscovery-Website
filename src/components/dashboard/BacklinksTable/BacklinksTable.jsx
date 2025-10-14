"use client";

import React from 'react';
import styles from './BacklinksTable.module.css';

// 1. This component now receives all its data as props
const BacklinksTable = ({ backlinks, totalCount, isLoading, error, domain }) => {

  const renderAnchor = (backlink) => {
    // ... (This function remains the same)
    if (backlink.image_url) {
      return <img src={backlink.image_url} alt="Backlink Anchor" className={styles.anchorImage} />;
    }
    if (backlink.anchor) {
      return backlink.anchor.replace(/\s+/g, ' ').trim();
    }
    return 'No Anchor Text';
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          {domain ? `Backlinks for ${domain}` : 'New Backlinks'}
        </h3>
        {domain && <span className={styles.totalCount}>{new Intl.NumberFormat().format(totalCount)} Total</span>}
      </div>

      <div className={styles.tableContainer}>
        {/* 2. Use the props to determine what to display */}
        {isLoading && <p>Loading backlinks for {domain}...</p>}
        {error && <p className={styles.error}>Error: {error}</p>}
        {!domain && !isLoading && <p>Enter a domain on the home page to see its backlinks.</p>}
        
        {domain && !isLoading && !error && backlinks.length > 0 && (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Source</th>
                <th>Anchor & Target Link</th>
                <th>Type</th>
                <th>Rank</th>
              </tr>
            </thead>
            <tbody>
              {backlinks.map((link, index) => (
                <tr key={index}>
                  <td className={styles.sourceCell}>
                    <a href={link.url_from} target="_blank" rel="noopener noreferrer">
                      {link.domain_from}
                    </a>
                  </td>
                  <td>
                    <div className={styles.anchorCell}>{renderAnchor(link)}</div>
                    <div className={styles.targetUrl}>{link.url_to}</div>
                  </td>
                  <td>
                    <span className={link.dofollow ? styles.dofollow : styles.nofollow}>
                      {link.dofollow ? 'Dofollow' : 'Nofollow'}
                    </span>
                  </td>
                  <td>{link.rank}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {domain && !isLoading && !error && backlinks.length === 0 && <p>No backlinks found for {domain}.</p>}
      </div>
    </div>
  );
};

export default BacklinksTable;