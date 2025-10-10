import FeaturesGrid from "@/components/FeaturesGrid/FeaturesGrid";

export default function FeaturesPage() {
  return (
    <div style={{ padding: '4rem 2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
        Our Features
      </h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto 2.5rem auto' }}>
        Explore the comprehensive suite of tools StatsDiscovery offers to improve your website's SEO performance.
      </p>
      
      {/* We are reusing the component you already built! */}
      <FeaturesGrid />
    </div>
  );
}