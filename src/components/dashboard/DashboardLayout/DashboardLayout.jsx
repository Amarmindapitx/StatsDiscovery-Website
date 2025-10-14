"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ Added imports
import {
  FiCalendar,
  FiDownload,
  FiShare2,
  FiSettings,
  FiCheckCircle,
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
import BacklinksTable from "../BacklinksTable/BacklinksTable";
import SerpFeatures from "../SerpFeatures/SerpFeatures";
import LiveKeywordTracking from "../LiveKeywordTracking/LiveKeywordTracking";
import BacklinkProfile from "../BacklinkProfile/BacklinkProfile";
import AdsDashboard from "../AdsDashboard/AdsDashboard"; // for ADS tab
import GmbDashboard from "../GmbDashboard/GmbDashboard";

// Tabs list
const TABS = ["SEO", "ADS", "GMB", "SOCIAL", "REPUTO", "PMS", "CONTENT"];

// Sample data for charts in StatCards
const sampleData = [
  { uv: 400 },
  { uv: 300 },
  { uv: 600 },
  { uv: 500 },
  { uv: 800 },
  { uv: 700 },
  { uv: 900 },
];

// Helper function to render the correct section based on active tab
const renderSection = (activeTab) => {
  switch (activeTab) {
    case "ADS":
      return <AdsDashboard />;

    case "GMB": // <-- ADD THIS CASE
      return <GmbDashboard />;

    case "SEO":
    default:
      return (
        <>
          {/* Main Grid Section */}
          <div className={styles.mainGrid}>
            <div className={styles.leftColumn}>
              <ScoreGauge score={91} />
              <p className={styles.scoreText}>
                Website score for <strong>seodiscovery.com</strong>
              </p>
              <Link href="/seo-audit" className={styles.auditButton}>
                View Audit
              </Link>
              <div className={styles.checksList}>
                <div className={styles.checkItem}>
                  <span>Crawled pages</span> <span>100</span>
                </div>
                <div className={styles.checkItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Google indexable pages</span> <span>100</span>
                </div>
                <div className={styles.checkItem}>
                  <FiCheckCircle className={styles.checkIcon} />
                  <span>Google safe browsing</span> <span>Site is safe</span>
                </div>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <StatCard
                title="Organic Keywords"
                value="6944"
                data={sampleData}
                isBarChart={true}
              />
              <StatCard title="Page Authority" value="44" data={sampleData} />
              <StatCard
                title="Referring Domains"
                value="2456"
                data={sampleData}
              />
              <StatCard title="Domain Authority" value="36" data={sampleData} />
            </div>
          </div>

          {/* Integration Section */}
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

            {/* SEO Sub-Sections */}
            <div className={styles.chartSection}>
              <OrganicKeywordsChart />
            </div>

            <div className={styles.backlinksSection}>
              <BacklinksTable />
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
          </div>
        </>
      );
  }
};

const DashboardLayout = () => {
  const router = useRouter(); // ✅ Added
  const searchParams = useSearchParams(); // ✅ Added

  const domain = searchParams.get("domain") || "seodiscovery.com";
  const tabFromURL = searchParams.get("tab") || "SEO";

  const [activeTab, setActiveTab] = useState(tabFromURL);

  // ✅ Sync state with URL (when user changes tab)
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/dashboard?domain=${domain}&tab=${tab}`);
  };

  // ✅ Sync back if user manually edits URL
  useEffect(() => {
    const currentTab = searchParams.get("tab") || "SEO";
    setActiveTab(currentTab);
  }, [searchParams]);

  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader />

      {/* Tabs & Actions */}
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
          <button>
            <FiCalendar />
          </button>
          <button>
            <FiDownload />
          </button>
          <button>
            <FiShare2 />
          </button>
          <button>
            <FiSettings />
          </button>
        </div>
      </div>

      {/* Render the Active Tab Section */}
      <main className={styles.pageContent}>{renderSection(activeTab)}</main>
    </div>
  );
};

export default DashboardLayout;
