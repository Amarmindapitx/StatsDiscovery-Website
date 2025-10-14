"use client";

import React from 'react';
import {
  FiLink, FiChevronRight, FiFileText, FiDownload, FiStar, FiTag, FiPlus,
  FiArrowUp, FiTrendingUp, FiSearch, FiChevronDown, FiFilter, FiMonitor, FiMoreVertical
} from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './LiveKeywordTracking.module.css';

// Data for the 6 stat cards
const statsData = [
  { value: '0', delta: 1, label: 'Keywords Up' },
  { value: '0', delta: 1, label: 'In Top 3' },
  { value: '1', delta: 1, label: 'In Top 10' },
  { value: '1', delta: 1, label: 'In Top 20' },
  { value: '1', delta: 1, label: 'In Top 30' },
  { value: '1', delta: 1, label: 'In Top 100' },
];

// Data for the line chart
const chartData = [
  { name: '19 Sep', value: 0 }, { name: '26 Sep', value: 0 },
  { name: '03 Oct', value: 0 }, { name: '10 Oct', value: 0 },
];

const LiveKeywordTracking = () => {
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <FiLink className={styles.headerIcon} />
          <h2 className={styles.title}>Live Keyword Tracking</h2>
          <button className={styles.howItWorksButton}>
            See how it works <FiChevronRight />
          </button>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.iconButton}><FiFileText /></button>
          <button className={styles.iconButton}><FiDownload /></button>
          <button className={styles.iconButton}><FiStar /></button>
          <button className={styles.iconButton}><FiTag /></button>
          <button className={styles.addKeywordsButton}>
            <FiPlus /> Add Keywords
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statValueContainer}>
                <span className={styles.statValue}>{stat.value}</span>
                {stat.delta !== undefined && (
                  <span className={styles.statDelta}><FiArrowUp />/{stat.delta}</span>
                )}
              </div>
              <div className={styles.statLabelContainer}>
                <FiTrendingUp className={styles.statIcon} />
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
              <p className={styles.statFooter}>since start</p>
            </div>
          ))}
        </div>
        <div className={styles.chartCard}>
            <h4 className={styles.chartTitle}>Keywords in top positions for the last 30 days</h4>
            <ResponsiveContainer width="100%" height={150}>
                <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis
                    tickFormatter={(value) => `${value}%`}
                    ticks={[0, 50, 100]} domain={[0, 100]}
                    tickLine={false} axisLine={false} fontSize={12}
                />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
      </div>

      {/* Keywords Table Section */}
      <div className={styles.tableSection}>
        <div className={styles.filters}>
          <div className={styles.leftFilters}>
            <div className={styles.showEntries}>
              <span>Show</span>
              <select><option>50</option></select>
              <FiChevronDown />
            </div>
            <div className={styles.search}>
              <input type="text" placeholder="Search..." />
              <button><FiSearch /></button>
            </div>
          </div>
          <div className={styles.rightFilters}>
            <span>Group By</span>
            <button className={styles.filterButton}><FiStar /> Favourites <FiChevronDown /></button>
            <div className={styles.switch}>
              <span className={styles.active}>Locations</span>
              <span>Devices</span>
            </div>
            <button className={styles.resetButton}><FiFilter /> Reset Filters</button>
          </div>
        </div>

        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>Keyword</th>
                    <th>Location</th>
                    <th>Intent</th>
                    <th>Start</th>
                    <th><FaGoogle /> Page</th>
                    <th>Rank</th>
                    <th>7 Days</th>
                    <th>30 Days</th>
                    <th>Life</th>
                    <th>Comp</th>
                    <th>SV</th>
                    <th>Date</th>
                    <th>Ranking URL</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td className={styles.keywordCell}>best seo company in india</td>
                    <td><span role="img" aria-label="India flag">🇮🇳</span> Mohali, Punjab, India</td>
                    <td>-</td>
                    <td>7</td>
                    <td>1</td>
                    <td className={styles.rankCell}>7 <FiMonitor /></td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>0</td>
                    <td>0</td>
                    <td>14-Oct-25</td>
                    <td className={styles.urlCell}>
                    <a href="#"><FiLink /> /seo-company-india.php</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div className={styles.pagination}>
          <span>Showing 1 to 1 of 1 entries</span>
        </div>
      </div>
    </div>
  );
};

export default LiveKeywordTracking;