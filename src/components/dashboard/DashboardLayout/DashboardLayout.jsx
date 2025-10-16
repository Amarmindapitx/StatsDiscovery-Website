"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FiCalendar,
  FiDownload,
  FiShare2,
  FiSettings,
  FiCheckCircle,
  FiInfo
} from "react-icons/fi";

import {
  LOGO_GOOGLE_SEARCH_CONSOLE,
  LOGO_GOOGLE_ANALYTICS,
} from "@/config/images";

import styles from "./DashboardLayout.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import ScoreGauge from "../ScoreGauge/ScoreGauge";
import StatCard from "../StatCard/StatCard";
import IntegrationCard from "../IntegrationCard/IntegrationCard";
import OrganicKeywordsChart from "../OrganicKeywordsChart/OrganicKeywordsChart";
import KeywordAnalysis from "../KeywordAnalysis/KeywordAnalysis";
import SerpFeatures from "../SerpFeatures/SerpFeatures";
import LiveKeywordTracking from "../LiveKeywordTracking/LiveKeywordTracking";
import BacklinkProfile from "../BacklinkProfile/BacklinkProfile";
import AdsDashboard from "../AdsDashboard/AdsDashboard";
import GmbDashboard from "../GmbDashboard/GmbDashboard";

// Tabs list
const TABS = ["SEO", "ADS", "GMB", "SOCIAL", "REPUTO", "PMS", "CONTENT"];

/* -------------------------------------------------------------------------------------------------
    ✅ renderSeoSection
------------------------------------------------------------------------------------------------- */
const renderSeoSection = (data, website) => {
  if (!data) {
    return (
      <div className={styles.centeredMessage}>
        No SEO data available for this website.
      </div>
    );
  }

  const organicKeywordsChartData = [
    { name: 'Jan', value: 10 }, { name: 'Feb', value: 20 }, { name: 'Mar', value: 15 },
    { name: 'Apr', value: 30 }, { name: 'May', value: 25 }, { name: 'Jun', value: 40 },
    { name: 'Jul', value: 35 }, { name: 'Aug', value: 50 }, { name: 'Sep', value: 45 },
    { name: 'Oct', value: 60 }, { name: 'Nov', value: 55 }, { name: 'Dec', value: 70 },
  ];

  return (
    <>
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ScoreGauge score={data.score || "N/A"} />
          <p className={styles.scoreText}>
            Website score for <strong>{website}</strong>
          </p>
          <Link href="/seo-audit" className={styles.auditButton}>
            View Audit
          </Link>

          <div className={styles.checksList}>
            <div className={styles.checkItem}>
              <span>Crawled pages</span> <span>{data.crawled_pages || "N/A"}</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google indexable pages</span> <span>{data.indexable || "N/A"}</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google safe browsing</span> <span>{data.safety || "N/A"}</span>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <StatCard
            title="Organic Keywords"
            value={data.total_keywords || "N/A"}
            chartType="bar"
            chartData={organicKeywordsChartData}
          />
          <StatCard
            title="Page Authority"
            value={data.page_authority || "N/A"}
            chartType="line"
            chartData={organicKeywordsChartData}
          />
          <StatCard
            title="Referring Domains"
            value={data.referring_domains || "N/A"}
            chartType="line"
            chartData={organicKeywordsChartData}
          />
          <StatCard
            title="Domain Authority"
            value={data.domain_authority || "N/A"}
            chartType="line"
            chartData={organicKeywordsChartData}
          />
        </div>
      </div>

      <div className={styles.connectionsContainer}>
        <IntegrationCard
          logoSrc={LOGO_GOOGLE_SEARCH_CONSOLE}
          logoAlt="Google Search Console Logo"
          description="To get insights about SERP, keywords and build reports for your SEO dashboard."
          onConnect={() => console.log("Connect to Google Search Console")}
        />
        <IntegrationCard
          logoSrc={LOGO_GOOGLE_ANALYTICS}
          logoAlt="Google Analytics Logo"
          description="To get insights about your website traffic and build reports for your SEO dashboard."
          onConnect={() => console.log("Connect to Google Analytics")}
        />
      </div>

      <div className={styles.chartSection}>
        <OrganicKeywordsChart />
      </div>

      <div className={styles.analysisSection}>
        <KeywordAnalysis />
      </div>
      <div className={styles.serpSection}>
        <SerpFeatures />
      </div>
      <div className={styles.someContainer}>
        <LiveKeywordTracking />
      </div>
      <div className={styles.someContainer}>
        <BacklinkProfile />
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------------------------------
    ✅ DashboardLayout Component
------------------------------------------------------------------------------------------------- */
const DashboardLayout = () => {
  const router = useRouter();

  const [website, setWebsite] = useState(null);
  const [activeTab, setActiveTab] = useState("SEO");
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const websiteParam = params.get("website") || "www.seodiscovery.com";
    const tabParam = params.get("tab") || "SEO";
    setWebsite(websiteParam);
    setActiveTab(tabParam);
  }, []);

  // ✅ Fetch Data from API
  useEffect(() => {
    if (!website) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("https://seo-w4pi.vercel.app/api/backlinks/fetch", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ website }),
        });

        const result = await response.json();

        if (result.success) {
          const apiData = result.data;

          // ✅ Only keep real values for backlinks and keywords
          const formattedData = {
            total_backlinks: apiData.total_backlinks,  // 28379
            total_keywords: apiData.total_keywords,    // 356203
            first_backlink: apiData.first_backlink,
            first_keyword: apiData.first_keyword,
            score: "N/A",
            crawled_pages: "N/A",
            indexable: "N/A",
            safety: "N/A",
            page_authority: "N/A",
            domain_authority: "N/A",
            referring_domains: "N/A",
          };

          setDashboardData(formattedData);
        } else {
          setError("Failed to fetch data from API.");
        }
      } catch (err) {
        setError("Error fetching data from API.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [website]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/dashboard?website=${website || ""}&tab=${tab}`);
  };

  const renderMainContent = () => {
    if (!website) {
      return (
        <div className={styles.centeredMessage}>
          Please provide a website in the URL to see the report.
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.centeredMessage}>
          Loading data for {website}...
        </div>
      );
    }

    if (error) {
      return (
        <div className={`${styles.centeredMessage} ${styles.error}`}>
          {error}
        </div>
      );
    }

    switch (activeTab) {
      case "ADS":
        return <AdsDashboard />;
      case "GMB":
        return <GmbDashboard />;
      case "SEO":
      default:
        return renderSeoSection(dashboardData, website);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader clientName={website} />

      <div className={styles.tabsAndActions}>
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab}
              className={tab === activeTab ? styles.activeTab : styles.tab}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.actions}>
          <button><FiCalendar /></button>
          <button><FiDownload /></button>
          <button><FiShare2 /></button>
          <button><FiSettings /></button>
        </div>
      </div>

      <main className={styles.pageContent}>{renderMainContent()}</main>
    </div>
  );
};

export default DashboardLayout;
