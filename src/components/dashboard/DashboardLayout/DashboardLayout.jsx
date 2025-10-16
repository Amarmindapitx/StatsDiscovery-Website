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
  FiInfo // Added for StatCard info icon
} from "react-icons/fi";

import {
  LOGO_GOOGLE_SEARCH_CONSOLE,
  LOGO_GOOGLE_ANALYTICS,
} from "@/config/images";

import styles from "./DashboardLayout.module.css";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import ScoreGauge from "../ScoreGauge/ScoreGauge";
import StatCard from "../StatCard/StatCard"; // Ensure this is correctly imported
import IntegrationCard from "../IntegrationCard/IntegrationCard";
// import BacklinksTable from "../BacklinksTable/BacklinksTable"; // No longer needed here
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
const renderSeoSection = (data, domain) => {
  if (!data) {
    return (
      <div className={styles.centeredMessage}>
        No SEO data available for this domain.
      </div>
    );
  }

  // --- MOCK CHART DATA (Replace with real data from your backend if available) ---
  const organicKeywordsChartData = [
    { name: 'Jan', value: 10 }, { name: 'Feb', value: 20 }, { name: 'Mar', value: 15 }, 
    { name: 'Apr', value: 30 }, { name: 'May', value: 25 }, { name: 'Jun', value: 40 }, 
    { name: 'Jul', value: 35 }, { name: 'Aug', value: 50 }, { name: 'Sep', value: 45 }, 
    { name: 'Oct', value: 60 }, { name: 'Nov', value: 55 }, { name: 'Dec', value: 70 },
  ];
  const pageAuthorityChartData = [
    { name: 'Jan', value: 30 }, { name: 'Feb', value: 32 }, { name: 'Mar', value: 35 }, 
    { name: 'Apr', value: 38 }, { name: 'May', value: 40 }, { name: 'Jun', value: 42 }, 
    { name: 'Jul', value: 44 }, { name: 'Aug', value: 43 }, { name: 'Sep', value: 45 }, 
    { name: 'Oct', value: 48 }, { name: 'Nov', value: 50 }, { name: 'Dec', value: 52 },
  ];
  const referringDomainsChartData = [
    { name: 'Jan', value: 10 }, { name: 'Feb', value: 12 }, { name: 'Mar', value: 11 }, 
    { name: 'Apr', value: 14 }, { name: 'May', value: 18 }, { name: 'Jun', value: 17 }, 
    { name: 'Jul', value: 19 }, { name: 'Aug', value: 22 }, { name: 'Sep', value: 21 }, 
    { name: 'Oct', value: 23 }, { name: 'Nov', value: 25 }, { name: 'Dec', value: 24 },
  ];
  const domainAuthorityChartData = [
    { name: 'Jan', value: 60 }, { name: 'Feb', value: 61 }, { name: 'Mar', value: 63 }, 
    { name: 'Apr', value: 65 }, { name: 'May', value: 67 }, { name: 'Jun', value: 69 }, 
    { name: 'Jul', value: 70 }, { name: 'Aug', value: 71 }, { name: 'Sep', value: 72 }, 
    { name: 'Oct', value: 73 }, { name: 'Nov', value: 74 }, { name: 'Dec', value: 75 },
  ];

  return (
    <>
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ScoreGauge score={data.score || "85"} />
          <p className={styles.scoreText}>
            Website score for <strong>{domain}</strong>
          </p>
          <Link href="/seo-audit" className={styles.auditButton}>
            View Audit
          </Link>

          <div className={styles.checksList}>
            <div className={styles.checkItem}>
              <span>Crawled pages</span> <span>{data.crawled_pages}</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google indexable pages</span> <span>{data.indexable}</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google safe browsing</span> <span>{data.safety}</span>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <StatCard
            title="Organic Keywords"
            value={data.organic_keywords}
            chartType="bar"
            chartData={organicKeywordsChartData}
          />
          <StatCard
            title="Page Authority"
            value={data.page_authority}
            chartType="line"
            chartData={pageAuthorityChartData}
          />
          <StatCard
            title="Referring Domains"
            value={data.total_count}
            chartType="line"
            chartData={referringDomainsChartData}
          />
          <StatCard
            title="Domain Authority"
            value={data.domain_authority}
            chartType="line"
            chartData={domainAuthorityChartData}
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

      {/* --- The detailed backlinks table has been removed from here to improve flow --- */}
      {/* You can now show the BacklinksTable component on a separate page or in a modal, */}
      {/* and link to it from within your BacklinkProfile component. */}
      
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

  const [domain, setDomain] = useState(null);
  const [activeTab, setActiveTab] = useState("SEO");
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain") || "example.com";
    const tabParam = params.get("tab") || "SEO";
    setDomain(domainParam);
    setActiveTab(tabParam);
  }, []);

  // 🧩 Replace API call with hardcoded mock data
  useEffect(() => {
    if (!domain) return;

    setIsLoading(true);
    setError(null);

    // Simulate async delay like real API
    setTimeout(() => {
      const mockData = {
        total_count: "24",
        score: "85",
        crawled_pages: "120",
        indexable: "98%",
        safety: "Site is safe",
        organic_keywords: "230",
        page_authority: "67",
        domain_authority: "72",
        backlinks: [
          { source: "https://example.com", target: "https://yourdomain.com", anchor: "SEO tips" },
          { source: "https://blog.com", target: "https://yourdomain.com", anchor: "marketing strategy" },
        ],
      };

      setDashboardData(mockData);
      setIsLoading(false);
    }, 1000);
  }, [domain]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/dashboard?domain=${domain || ""}&tab=${tab}`);
  };

  const renderMainContent = () => {
    if (!domain) {
      return (
        <div className={styles.centeredMessage}>
          Please provide a domain in the URL to see the report.
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className={styles.centeredMessage}>
          Loading data for {domain}...
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
        return renderSeoSection(dashboardData, domain);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader clientName={domain} />

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