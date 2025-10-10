import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const sitemapLinks = [
  'About', 'API', 'Automated SEO Reports', 'Agency Rank Tracking', 'Backlink Checker', 'Blog', 'Bulk Reporting', 'DIY SEO', 'Free Tools', 'Keyword Research Tool', 'Login', 'Pricing', 'SEO Audit'
];

const featuredArticles = [
  'Backlink Exchange: How to Build Links Without Getting Penalized',
  'What is Noopener Noreferrer in SEO and Link Building?',
  'SEO vs. GEO: What are the Main Differences?',
  'Direct vs Organic Traffic: Examples & Which is Best?'
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Column 1: Brand & Socials */}
        <div className={styles.column}>
          <Link href="/" className={styles.mainLogo}>
            <Image src="/assets/logo.png" alt="StatsDiscovery Logo" width={200} height={200} />
         
          </Link>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 2: Sitemap */}
        <div className={styles.column}>
          <h3>Sitemap</h3>
          <ul className={styles.linkList}>
            {sitemapLinks.map(link => (
              <li key={link}><Link href={`/${link.toLowerCase().replace(/ /g, '-')}`}>{link}</Link></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Awards */}
        <div className={styles.column}>
          <h3>Awards & Recognition</h3>
          <div className={styles.awardsGrid}>
            <Image src="/images/awards/momentum-leader.png" alt="Momentum Leader Award" width={80} height={80} />
            <Image src="/images/awards/high-performer.png" alt="High Performer Award" width={80} height={80} />
            <Image src="/images/awards/best-est-roi.png" alt="Best Estimated ROI Award" width={80} height={80} />
            <Image src="/images/awards/eco-badge.png" alt="Eco Badge" width={80} height={80} />
          </div>
        </div>

        {/* Column 4: Featured Articles */}
        <div className={styles.column}>
          <h3>Featured Articles</h3>
          <ul className={styles.linkList}>
            {featuredArticles.map(article => (
              <li key={article}><Link href="#">{article}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.subFooter}>
        <p>&copy; {new Date().getFullYear()} StatsDiscovery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;