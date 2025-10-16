import AuditHero from '@/components/seo-audit-pages/AuditHero/AuditHero';
import WhyUseAudit from '@/components/seo-audit-pages/WhyUseAudit/WhyUseAudit';
import GenerateLeads from '@/components/seo-audit-pages/GenerateLeads/GenerateLeads';
import ReportDetails from '@/components/seo-audit-pages/ReportDetails/ReportDetails';
import AccessibilityFeature from '@/components/seo-audit-pages/AccessibilityFeature/AccessibilityFeature';
import KeywordRankings from '@/components/seo-audit-pages/KeywordRankings/KeywordRankings';
import BacklinksFeature from '@/components/seo-audit-pages/BacklinksFeature/BacklinksFeature';
import ResponsivenessFeature from '@/components/seo-audit-pages/ResponsivenessFeature/ResponsivenessFeature';
import PageSpeedFeature from '@/components/seo-audit-pages/PageSpeedFeature/PageSpeedFeature';
import SocialMediaFeature from '@/components/seo-audit-pages/SocialMediaFeature/SocialMediaFeature';

// --- CORRECTED AND ADDED IMPORTS ---
import ResponsivenessFeature from '@/components/seo-audit-pages/ResponsivenessFeature/ResponsivenessFeature';
import PageSpeedFeature from '@/components/seo-audit-pages/PageSpeedFeature/PageSpeedFeature';
import SocialMediaFeature from '@/components/seo-audit-pages/SocialMediaFeature/SocialMediaFeature';


export default function SeoAuditPage() {
  return (
    <div>
      <AuditHero />
      <WhyUseAudit />
      <GenerateLeads />
      <ReportDetails />
      <AccessibilityFeature />
      <KeywordRankings />
      <BacklinksFeature />
      <ResponsivenessFeature />
      <PageSpeedFeature />
      <SocialMediaFeature />
    </div>
  );
}