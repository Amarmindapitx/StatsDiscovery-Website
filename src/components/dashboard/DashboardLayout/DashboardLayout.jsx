"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
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
import BacklinksTable from "../BacklinksTable/BacklinksTable";
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
   ✅ renderSeoSection — updated to use the new API data structure
------------------------------------------------------------------------------------------------- */
const renderSeoSection = (data, domain) => {
  if (!data) {
    return (
      <div className={styles.centeredMessage}>
        No SEO data available for this domain.
      </div>
    );
  }

  return (
    <>
      {/* Main Grid Section */}
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          {/* No score in API, so show N/A */}
          <ScoreGauge score={"N/A"} />
          <p className={styles.scoreText}>
            Website score for <strong>{domain}</strong>
          </p>
          <Link href="/seo-audit" className={styles.auditButton}>
            View Audit
          </Link>

          {/* Basic site checks (static placeholders) */}
          <div className={styles.checksList}>
            <div className={styles.checkItem}>
              <span>Crawled pages</span> <span>N/A</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google indexable pages</span> <span>N/A</span>
            </div>
            <div className={styles.checkItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>Google safe browsing</span> <span>Site is safe</span>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          {/* Show N/A for missing API fields */}
          <StatCard title="Organic Keywords" value={"N/A"} isBarChart={true} />
          <StatCard title="Page Authority" value={"N/A"} />

          {/* ✅ UPDATED: Pass the total_count from the API response to the StatCard */}
          <StatCard
            title="Referring Domains"
            value={data.total_count ? data.total_count.toLocaleString() : "0"}
          />

          <StatCard title="Domain Authority" value={"N/A"} />
        </div>
      </div>

      {/* Integrations Section */}
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

      {/* SEO Sub-Sections */}
      <div className={styles.backlinksSection}>
        {/* ✅ UPDATED: Pass the backlinks array from the API response to the table */}
        <BacklinksTable backlinks={data.backlinks || []} />
      </div>

      {/* Organic Keywords Chart Section */}
      <div className={styles.chartSection}>
        <OrganicKeywordsChart />
      </div>

      {/* Optional: Keep other SEO analysis components if needed */}
      <div className={styles.analysisSection}>
        <KeywordAnalysis />
      </div>
      <div className={styles.serpSection}>
        <SerpFeatures />
      </div>
      <div className={styles.someContainer}>
        <LiveKeywordTracking />
      </div>
      {/* // This is the corrected line */}
      <div className={styles.someContainer}>
        <BacklinkProfile domain={domain} />
      </div>
    </>
  );
};

/* -------------------------------------------------------------------------------------------------
   ✅ DashboardLayout Component
------------------------------------------------------------------------------------------------- */
const DashboardLayout = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const domain = searchParams.get("domain");
  const tabFromURL = searchParams.get("tab") || "SEO";

  const [activeTab, setActiveTab] = useState(tabFromURL);
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /* -------------------------------
     Fetch SEO Data from API
  --------------------------------*/
  useEffect(() => {
    if (!domain) {
      setIsLoading(false);
      setError("Please provide a domain in the URL to see the report.");
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setDashboardData(null);

      try {
        const response = await fetch(
          "https://seo-mu17.vercel.app/api/backlinks/fetch",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            // ✅ UPDATED BODY (backend expects "website" key)
            body: JSON.stringify({ website: domain }),
          }
        );

        if (!response.ok) {
          throw new Error("Data could not be fetched for this domain.");
        }

        const result = await response.json();
        console.log("✅ API Data Received:", result);

        // ✅ UPDATED: Store the nested `data` object from the API response
        setDashboardData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [domain]);

  /* -------------------------------
     Handle tab switching
  --------------------------------*/
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/dashboard?domain=${domain || ""}&tab=${tab}`);
  };

  useEffect(() => {
    setActiveTab(searchParams.get("tab") || "SEO");
  }, [searchParams]);

  /* -------------------------------
     Render main content
  --------------------------------*/
  const renderMainContent = () => {
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

  /* -------------------------------
     Render Layout
  --------------------------------*/
  return (
    <div className={styles.dashboardContainer}>
      <DashboardHeader clientName={domain} />

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

      {/* Main Content */}
      <main className={styles.pageContent}>{renderMainContent()}</main>
    </div>
  );
};

export default DashboardLayout;
