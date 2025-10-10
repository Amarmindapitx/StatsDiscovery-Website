import styles from './TargetAudience.module.css';
import { FiCheck } from 'react-icons/fi';

const benefits = [
  {
    title: 'Save Time',
    text: 'Some agencies spend hundreds of hours of manual work performing Website Audits which can be automated in a matter of seconds.'
  },
  {
    title: 'Present Beautiful Reports',
    text: 'Wow your clients and prospects with impressive bespoke reports that look like they were made by hand.'
  },
  {
    title: 'Win More Customers',
    text: 'Turn your site into a lead magnet. Use White Label PDF Reports and the Embeddable Audit Tool to acquire more customers straight from your website.'
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
          ...SEO Experts, Web Designers or anyone that needs to improve a website!
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