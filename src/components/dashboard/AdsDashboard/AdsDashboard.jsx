"use client";

import React, { useState } from 'react';
import styles from './AdsDashboard.module.css';
import { FiClock } from 'react-icons/fi';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// Mock data for charts
const performanceData = [
  { name: 'Jan', value: 250 },
  { name: 'Feb', value: 500 },
  { name: 'Mar', value: 750 },
];

const StatCard = ({ icon, title, value }) => (
    <div className={styles.statCard}>
        {icon}
        <p className={styles.statTitle}>{title}</p>
        <p className={styles.statValue}>{value}</p>
    </div>
);

const ChartCard = ({ icon, title, data }) => (
    <div className={styles.chartCard}>
        <div className={styles.chartHeader}>
            {icon}
            <p className={styles.chartTitle}>{title}</p>
        </div>
        <ResponsiveContainer width="100%" height={150}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis domain={[0, 1000]} ticks={[0, 250, 500, 1000]} tickLine={false} axisLine={false} />
                <Line type="monotone" dataKey="value" stroke="#d1d5db" strokeWidth={2} dot={false} />
            </LineChart>
        </ResponsiveContainer>
    </div>
);

const AdsDashboard = () => {
  const [activeTab, setActiveTab] = useState('Facebook Ads');
  const TABS = ['Overview', 'Google Ads', 'Facebook Ads'];

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <div className={styles.subTabs}>
            {TABS.map(tab => (
                <button
                    key={tab}
                    className={activeTab === tab ? styles.activeSubTab : styles.subTab}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
        <div className={styles.dateRange}>
            <FiClock /> Last 30 Days
        </div>
      </div>

      <div className={styles.contentGrid}>
        {/* Google Ads Section */}
        <div className={styles.adSection}>
            <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Google Ads</h3>
                <button className={styles.connectButton}>Connect</button>
            </div>
            <div className={styles.cardGrid}>
                <StatCard icon={<FaGoogle/>} title="Clicks" value="0" />
                <StatCard icon={<FaGoogle/>} title="Impressions" value="0" />
                <ChartCard icon={<FaGoogle/>} title="Performance" data={performanceData} />
            </div>
        </div>

        {/* Facebook Ads Section */}
        <div className={styles.adSection}>
            <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Facebook Ads</h3>
                <button className={styles.connectButton}>Connect</button>
            </div>
            <div className={styles.cardGrid}>
                <StatCard icon={<FaFacebook/>} title="Clicks" value="0" />
                <StatCard icon={<FaFacebook/>} title="Impressions" value="0" />
                <ChartCard icon={<FaFacebook/>} title="Audience Growth" data={performanceData} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdsDashboard;