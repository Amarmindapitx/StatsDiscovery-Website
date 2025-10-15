"use client";

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { FiTrendingUp, FiInfo, FiRotateCw } from 'react-icons/fi';
import styles from './OrganicKeywordsChart.module.css';

// --- MOCK DATA ---
// This data is structured to mimic the stacked bar chart in your image.
const chartData = [
  { name: 'Oct 24', top3: 180, rank4to10: 250, rank11to20: 580, rank21to50: 1350 },
  { name: 'Dec 24', top3: 200, rank4to10: 280, rank11to20: 420, rank21to50: 1550 },
  { name: 'Feb 25', top3: 150, rank4to10: 220, rank11to20: 600, rank21to50: 1600 },
  { name: 'Apr 25', top3: 190, rank4to10: 260, rank11to20: 1100, rank21to50: 1950 },
  { name: 'Jun 25', top3: 220, rank4to10: 350, rank11to20: 1600, rank21to50: 2200 },
  { name: 'Aug 25', top3: 250, rank4to10: 400, rank11to20: 1750, rank21to50: 2500 },
  { name: 'Oct 25', top3: 280, rank4to10: 450, rank11to20: 2050, rank21to50: 3000, serp: 1200 }, // Added SERP features for the last bar
];

const legendItems = [
    { color: '#FBBF24', label: 'Top 3' },
    { color: '#60A5FA', label: '4-10' },
    { color: '#3B82F6', label: '11-20' },
    { color: '#2563EB', label: '21-50' },
    { color: '#1D4ED8', label: '51-100' },
    { color: '#4ADE80', label: 'SERP Features' },
]

const OrganicKeywordsChart = () => {
  const [timeframe, setTimeframe] = useState('1 Year');

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <FiTrendingUp className={styles.headerIcon} />
          <div>
            <h3 className={styles.title}>
              Organic Keyword Growth <FiInfo className={styles.infoIcon} />
            </h3>
            <p className={styles.subtitle}>Last Updated: 16 seconds ago (Oct 14, 2025)</p>
          </div>
        </div>
        <button className={styles.refreshButton}>
          <FiRotateCw />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.legend}>
            {legendItems.map(item => (
                <div key={item.label} className={styles.legendItem}>
                    <span className={styles.legendColorBox} style={{ backgroundColor: item.color }}></span>
                    {item.label}
                </div>
            ))}
        </div>
        <div className={styles.timeframeSelector}>
          {['1 Year', '2 Year', 'All Time'].map(t => (
            <button
              key={t}
              className={timeframe === t ? styles.activeTimeframe : styles.timeframeButton}
              onClick={() => setTimeframe(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData} margin={{ top: 5, right: 30, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '0.5rem',
              }}
            />
            <Bar dataKey="top3" stackId="a" fill="#FBBF24" />
            <Bar dataKey="rank4to10" stackId="a" fill="#60A5FA" />
            <Bar dataKey="rank11to20" stackId="a" fill="#3B82F6" />
            <Bar dataKey="rank21to50" stackId="a" fill="#2563EB" />
            <Bar dataKey="serp" stackId="a" fill="#4ADE80" />
            <ReferenceLine x="Oct 25" stroke="#ef4444" strokeDasharray="5 5" label={{ 
                position: 'insideRight',
                value: 'Campaign starts Here',
                angle: 90,
                fill: '#ef4444',
                fontSize: 12,
                dy: 40,
                dx: 15
            }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrganicKeywordsChart;