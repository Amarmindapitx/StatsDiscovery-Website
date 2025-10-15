"use client";

import React, { useState, useEffect } from "react";
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

const BacklinkProfile = ({ domain }) => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState("All Time");

  useEffect(() => {
    if (!domain) {
      setIsLoading(false);
      setError("No domain provided.");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "https://seo-mu17.vercel.app/api/backlinks/fetch",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ website: domain }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch backlink profile data.");
        }

        const result = await response.json();
        // Assuming your API response has a 'data' object with these stats
        setProfileData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  const formatNumber = (num) => {
    try {
      return num.toLocaleString("en-US");
    } catch {
      return num;
    }
  };

  if (isLoading) {
    return <div className={styles.container}>Loading Backlink Profile...</div>;
  }

  if (error) {
    return <div className={styles.container}>{error}</div>;
  }

  if (!profileData) {
    return (
      <div className={styles.container}>
        No data available for this profile.
      </div>
    );
  }

  // Create dynamic chart and summary data from the API response
  // IMPORTANT: Adjust these property names (e.g., total_count) to match your actual API response.
  const chartData = [
    { name: "Start Date", referringDomains: 0, backlinks: 0 },
    {
      name: "Last Updated",
      referringDomains: profileData.total_count || 0,
      backlinks: profileData.total_backlinks || 0, // Assuming this key exists
    },
  ];

  const summaryData = [
    { label: "Backlinks", value: profileData.total_backlinks || 0 }, // Assuming key
    { label: "Referring Domains", value: profileData.total_count || 0 },
    { label: "Referring Urls", value: profileData.referring_urls || 0 }, // Assuming key
    { label: "Referring IPs", value: profileData.referring_ips || 0 }, // Assuming key
    { label: "DoFollow Links", value: profileData.dofollow_links || 0 }, // Assuming key
    { label: "NoFollow Links", value: profileData.nofollow_links || 0 }, // Assuming key
    { label: "Sponsored", value: profileData.sponsored_links || 0 }, // Assuming key
    { label: "UGC", value: profileData.ugc_links || 0 }, // Assuming key
  ];

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
            <p className={styles.subtitle}>Last Updated on Oct 15, 2025</p>
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
              <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
              <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
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
