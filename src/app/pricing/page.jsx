"use client";

import { useState } from "react";

// --- Helper Components & Data ---

// Checkmark Icon Component (SVG)
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-green-400 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// Data for the pricing plans
const pricingData = [
  {
    badgeText: "DIY SEO",
    badgeClasses: "bg-red-500 text-white",
    price: { monthly: 29, annual: 21 },
    idealFor: "IDEAL FOR YOUR WEBSITE",
    description:
      "Simple Do-It-Yourself SEO Software that crawls your site for problems, recommends tasks and tracks rankings.",
    features: [
      "Site Crawling",
      "Task Recommendations",
      "Rank Tracking",
      "Basic Support",
    ],
  },
  {
    badgeText: "White Label",
    badgeClasses: "bg-green-500 text-white",
    price: { monthly: 39, annual: 29 },
    idealFor: "GREAT FOR MARKETERS",
    description:
      "Generate White Label PDF Reports with your own company logo, branding, text and check selections in 15 languages. Crawl Multiple Websites for issues.",
    features: [
      "All DIY Features",
      "White Label PDF Reports",
      "Custom Branding",
      "Multi-Site Crawling",
    ],
  },
  {
    badgeText: "White Label & Embedding",
    badgeClasses: "bg-yellow-500 text-white",
    price: { monthly: 59, annual: 44 },
    idealFor: "AWESOME FOR AGENCIES",
    description:
      'All "White Label" features + build a custom Embed Audit Form to generate leads straight from your site, and send them to your inbox or other systems.',
    features: [
      "All White Label Features",
      "Embeddable Audit Forms",
      "Lead Generation Tools",
      "Priority Support",
    ],
  },
];

// Pricing Toggle Component
function PricingToggle({ billingCycle, onToggle }) {
  const isAnnual = billingCycle === "annual";
  return (
    <div className="flex items-center justify-center space-x-4 my-10">
      <span
        className={`font-medium text-lg ${
          !isAnnual ? "text-white" : "text-gray-400"
        }`}
      >
        Monthly
      </span>
      <button
        type="button"
        onClick={() => onToggle(isAnnual ? "monthly" : "annual")}
        className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-700 transition-colors"
        aria-label="Toggle billing cycle"
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform duration-300 ease-in-out ${
            isAnnual ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
      <span
        className={`font-medium text-lg ${
          isAnnual ? "text-white" : "text-gray-400"
        }`}
      >
        Annually
      </span>
      <span className="ml-2 px-3 py-1 text-sm font-semibold text-green-300 bg-green-500/20 rounded-full">
        Save 25%
      </span>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ plan, billingCycle }) {
  return (
    <div className="bg-[#161b22] border border-gray-700 rounded-xl p-8 flex flex-col h-full transform hover:scale-105 hover:border-blue-500 transition-all duration-300">
      <div className="flex-grow">
        <div
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-6 ${plan.badgeClasses}`}
        >
          {plan.badgeText}
        </div>
        <div className="mb-2">
          <span className="text-5xl font-extrabold text-white">
            ${plan.price[billingCycle]}
          </span>
          <span className="text-gray-400 text-lg">/mo</span>
        </div>
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
          {plan.idealFor}
        </p>
        <p className="text-gray-300 mb-6 h-24">{plan.description}</p>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center text-gray-300">
              <CheckIcon />
              <span className="ml-3">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button className="w-full mt-8 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300">
        Choose Plan
      </button>
    </div>
  );
}

// --- Main Page Component ---
export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans p-8">
      <div className="container mx-auto max-w-7xl">
        <header className="text-center mb-6">
          <div className="inline-block bg-gray-800 border border-gray-700 text-gray-300 text-sm font-bold px-4 py-2 rounded-full mb-6">
            14 DAY FREE TRIAL
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3">
            Products and Pricing
          </h1>
          <p className="text-lg text-gray-400">
            Simple, predictable pricing. No hidden fees.
          </p>
        </header>

        <PricingToggle billingCycle={billingCycle} onToggle={setBillingCycle} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingData.map((plan) => (
            <PricingCard
              key={plan.badgeText}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        <footer className="text-center mt-16 text-gray-500">
          <p>
            All prices are in USD. You can cancel your subscription at any time.
          </p>
        </footer>
      </div>
    </div>
  );
}
