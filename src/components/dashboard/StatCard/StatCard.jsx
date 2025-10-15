// src/components/dashboard/StatCard/StatCard.jsx
"use client";
import styles from './StatCard.module.css';
// UPDATED: Added LineChart and Line to the import
import { BarChart, Bar, LineChart, Line, ResponsiveContainer } from 'recharts';
import { FiInfo } from 'react-icons/fi';

const StatCard = ({ title, value, data, isBarChart = false }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <FiInfo className={styles.infoIcon} />
      </div>
      <p className={styles.value}>{value}</p>
      <div className={styles.chartContainer}>
        {isBarChart ? (
          <ResponsiveContainer width="100%" height={60}>
            <BarChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <Bar dataKey="uv" fill="#4882ff" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={60}>
            <LineChart data={data}>
              <Line type="monotone" dataKey="uv" stroke="#4882ff" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default StatCard;