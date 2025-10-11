import AuditHero from '@/components/seo-audit-pages/AuditHero/AuditHero';
import WhyUseAudit from '@/components/seo-audit-pages/WhyUseAudit/WhyUseAudit';
import GenerateLeads from '@/components/seo-audit-pages/GenerateLeads/GenerateLeads';
import ReportDetails from '@/components/seo-audit-pages/ReportDetails/ReportDetails';
import AccessibilityFeature from '@/components/seo-audit-pages/AccessibilityFeature/AccessibilityFeature';
import { Key } from 'lucide-react';
import KeywordRankings from '@/components/seo-audit-pages/KeywordRankings/KeywordRankings';
import BacklinksFeature from '@/components/seo-audit-pages/BacklinksFeature/BacklinksFeature';

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
    </div>
  );
}