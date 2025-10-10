import Hero from '@/components/Hero/Hero';
import React from 'react';
import ProductPreview from '@/components/ProductPreview/ProductPreview'; 
import FeatureSection from '@/components/FeatureSection/FeatureSection';
import ReportsFeature from '@/components/ReportsFeature/ReportsFeature';
import CustomizationFeature from '@/components/CustomizationFeature/CustomizationFeature';
import EmbeddableFeature from '@/components/EmbeddableFeature/EmbeddableFeature';
import SeoSuiteSummary from '@/components/SeoSuiteSummary/SeoSuiteSummary';
import FeaturesGrid from '@/components/FeaturesGrid/FeaturesGrid';
import './globals.css';
import ToolboxFeature from '@/components/ToolboxFeature/ToolboxFeature';
import TargetAudience from '@/components/TargetAudience/TargetAudience';
import Testimonials from '@/components/Testimonials/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import CallToAction from '@/components/CallToAction/CallToAction';
import Footer from '@/components/Footer/Footer';


export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProductPreview />
      <FeatureSection />
      <ReportsFeature />
      <CustomizationFeature />
      <EmbeddableFeature />
      <SeoSuiteSummary />
      <FeaturesGrid />
      <ToolboxFeature />
      <TargetAudience />
      <Testimonials />
      <WhyChooseUs />
      <CallToAction />
      <Footer />
    </main>
  );
}