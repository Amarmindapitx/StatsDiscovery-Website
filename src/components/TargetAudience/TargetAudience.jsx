import styles from './TargetAudience.module.css';
import { FiCheck } from 'react-icons/fi';

const benefits = [
  {
    title: 'Save Time',
    text: 'Stop spending hundreds of hours on manual audits. Run full website audits in seconds, fully automated and ready to act on.'
  },
  {
    title: 'Present Beautiful Reports',
    text: 'Impress your clients and prospects with custom, white-label reports that look professionally crafted, every single time'
  },
  {
    title: 'Win More Customers',
    text: 'Turn your website into a powerful lead-generation tool. Use white-label PDF reports and the Embeddable Audit Form to attract and convert new clients directly from your site.'
  }
];

const TargetAudience = () => {
  return (
    <section className={styles.audienceSection}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.heading}>
          Perfect for Small Business Owners, Digital Agencies
        </h2>
        <p className={styles.subheading}>
        Whether you’re a small business owner, digital agency, SEO expert, web designer, or anyone looking to improve a website, StatsDiscovery makes SEO simple, fast, and effective.
        </p>
        <ul className={styles.benefitsList}>
          {benefits.map((benefit) => (
            <li key={benefit.title} className={styles.benefitItem}>
              <FiCheck className={styles.checkIcon} />
              <div className={styles.benefitText}>
                <strong>{benefit.title}</strong> - {benefit.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TargetAudience;