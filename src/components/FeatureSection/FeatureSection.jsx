"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./FeatureSection.module.css";
import { CometCard } from "@/components/ui/comet-card"; // 👈 Added import

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.featureSection} ${
        isVisible ? styles.isVisible : ""
      }`}
    >
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>A Complete, 360-Degree SEO Analysis</h2>
        <p className={styles.description}>
          StatsDiscovery performs a detailed SEO Analysis across 100 website
          data points. We provide a comprehensive view of your site's health by
          combining On-Page analysis, Core Web Vitals, backlinks insights, and
          usability and security checks.
        </p>
        <p className={styles.description}>
          Receive a clear A-F grade with a weighted score to instantly understand
          your site’s performance. Every check includes clear, actionable
          recommendations that guide you through the actual steps of improving
          your site.
        </p>

        <Link href="/seo-audit" className={styles.learnMoreButton}>
          Learn More
        </Link>
      </div>

      <div className={styles.imageContainer}>
        {/* 👇 Added CometCard wrapper for hover 3D effect */}
        <CometCard>
          <button
            type="button"
            className="flex cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-transparent p-2"
            aria-label="View SEO Feature Image"
            style={{
              transformStyle: "preserve-3d",
              transform: "none",
              opacity: 1,
            }}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/assets/feature-dashboard.png"
                alt="Dashboard showing SEO recommendations"
                width={700}
                height={550}
                className={`${styles.featureImage} rounded-[16px] object-cover`}
                priority
              />
            </div>
          </button>
        </CometCard>
      </div>
    </section>
  );
};

export default FeatureSection;
