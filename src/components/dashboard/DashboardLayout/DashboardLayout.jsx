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

  return (
    <>
      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <ScoreGauge score={"N/A"} />
          <p className={styles.scoreText}>
            Website score for <strong>{domain}</strong>
          </p>
          <Link href="/seo-audit" className={styles.auditButton}>
            View Audit
          </Link>

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
          <StatCard title="Organic Keywords" value={"N/A"} isBarChart={true} />
          <StatCard title="Page Authority" value={"N/A"} />
          <StatCard title="Referring Domains" value={data.total_count || "0"} />
          <StatCard title="Domain Authority" value={"N/A"} />
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

      <div className={styles.backlinksSection}>
        <BacklinksTable backlinks={data.backlinks || []} />
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

  // Client-side states
  const [domain, setDomain] = useState(null);
  const [activeTab, setActiveTab] = useState("SEO");
  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Client-only: extract query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const domainParam = params.get("domain");
    const tabParam = params.get("tab") || "SEO";

    setDomain(domainParam);
    setActiveTab(tabParam);
  }, []);

  // Fetch SEO Data from API
  useEffect(() => {
    if (!domain) return;

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      setDashboardData(null);

      try {
        const response = await fetch(
          "https://seo-lalv.vercel.app/api/backlinks/fetch",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ website: domain }),
          }
        );

        if (!response.ok) {
          throw new Error("Data could not be fetched for this domain.");
        }

        const result = await response.json();
        setDashboardData(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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
