"use client";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './ScoreGauge.module.css';

const ScoreGauge = ({ score }) => {
  const getPathColor = (percentage) => {
    if (percentage >= 90) return '#4caf50'; // Green
    if (percentage >= 50) return '#ffc107'; // Orange
    return '#f44336'; // Red
  };

  return (
    <div className={styles.gaugeContainer}>
      <CircularProgressbar
        value={score}
        text={`${score}`}
        strokeWidth={8}
        styles={buildStyles({
          textColor: '#1a1a1a',
          pathColor: getPathColor(score),
          trailColor: '#e5e7eb',
          textSize: '28px',
          pathTransitionDuration: 0.5,
        })}
      />
      <span className={styles.scoreLabel}>of 100</span>
    </div>
  );
};

export default ScoreGauge;