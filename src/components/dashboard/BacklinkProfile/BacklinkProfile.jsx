"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FiLink, FiInfo, FiRotateCw } from "react-icons/fi";
import styles from "./BacklinkProfile.module.css";

// Mock data for the line chart
const chartData = [
  { name: "Oct 14, 2025", referringDomains: 0, backlinks: 0 },
  { name: "Oct 14, 2025", referringDomains: 2457, backlinks: 551882 },
];

// Mock data for the summary table
const summaryData = [
  { label: "Backlinks", value: 551882 },
  { label: "Referring Domains", value: 2457 },
  { label: "Referring Urls", value: 517253 },
  { label: "Referring IPs", value: 2461 },
  { label: "DoFollow Links", value: 49539 },
  { label: "NoFollow Links", value: 501627 },
  { label: "Sponsored", value: 30 },
  { label: "UGC", value: 496709 },
];

const BacklinkProfile = () => {
  const [timeframe, setTimeframe] = useState("All Time");

  // Helper function to ensure consistent number formatting on both server and client
  const formatNumber = (num) => {
    try {
      return num.toLocaleString("en-US");
    } catch {
      return num;
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <FiLink className={styles.headerIcon} />
          <div>
            <h2 className={styles.title}>
              Backlink Profile <FiInfo className={styles.infoIcon} />
            </h2>
            <p className={styles.subtitle}>Last Updated on Oct 14, 2025</p>
          </div>
        </div>
        <div className={styles.refreshButtonContainer}>
          <FiRotateCw className={styles.refreshIcon} />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainGrid}>
        {/* Chart Section */}
        <div className={styles.chartSection}>
          <div className={styles.chartHeader}>
            <h3 className={styles.chartTitle}>Referring Domains</h3>
            <div className={styles.timeframeSelector}>
              {["All Time", "One Year", "Last 30 Days"].map((t) => (
                <button
                  key={t}
                  className={
                    timeframe === t
                      ? styles.activeTimeframe
                      : styles.timeframeButton
                  }
                  onClick={() => setTimeframe(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis
                yAxisId="left"
                orientation="left"
                stroke="#8884d8"
                label={{
                  value: "Referring Domain",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#82ca9d"
                label={{
                  value: "Backlinks",
                  angle: -90,
                  position: "insideRight",
                }}
              />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="referringDomains"
                name="Referring Domain"
                stroke="#ff7300"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="backlinks"
                name="Backlinks"
                stroke="#3b82f6"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Summary Table Section */}
        <div className={styles.summarySection}>
          <h3 className={styles.summaryTitle}>Summary</h3>
          <div className={styles.summaryTable}>
            {summaryData.map((item) => (
              <div key={item.label} className={styles.summaryRow}>
                <span className={styles.summaryLabel}>{item.label}</span>
                {/* ✅ Fixed Hydration Issue */}
                <span className={styles.summaryValue}>
                  {formatNumber(item.value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BacklinkProfile;
