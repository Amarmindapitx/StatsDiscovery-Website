"use client";

import React from 'react';
import styles from './BacklinksTable.module.css';

/**
 * A presentational component that displays a table of backlinks.
 * It receives all data as props and does not fetch its own data.
 * @param {Array} backlinks - The array of backlink objects to display.
 * @param {number} totalCount - The total number of backlinks.
 */
const BacklinksTable = ({ backlinks = [], totalCount = 0 }) => {

  // Helper function to render the anchor text or image
  const renderAnchor = (backlink) => {
    if (backlink.image_url) {
      return <img src={backlink.image_url} alt="Backlink Anchor" className={styles.anchorImage} />;
    }
    if (backlink.anchor) {
      // Clean up whitespace from the anchor text
      return backlink.anchor.replace(/\s+/g, ' ').trim();
    }
    return 'No Anchor Text';
  };

  // The parent component (DashboardLayout) handles loading and error states.
  // This component simply shows a message if it receives no data.
  if (!backlinks || backlinks.length === 0) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.title}>New Backlinks</h3>
            </div>
            <p style={{ padding: '20px', textAlign: 'center' }}>
              No backlink data is available for this domain.
            </p>
        </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>New Backlinks</h3>
        <span className={styles.totalCount}>{new Intl.NumberFormat().format(totalCount)} Total</span>
      </div>

      <div className={styles.tableContainer}>
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
      </div>
    </div>
  );
};

export default BacklinksTable;