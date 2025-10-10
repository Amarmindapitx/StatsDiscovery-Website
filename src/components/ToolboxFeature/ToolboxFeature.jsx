import Image from 'next/image';
import styles from './ToolboxFeature.module.css';
import { FiCheckCircle } from 'react-icons/fi';

const tools = [
  'Meta Tag Generator',
  'Keyword Generator',
  'Robots.txt Generator',
  '.htaccess File Generator',
  'XML Sitemap Generator',
];

const ToolboxFeature = () => {
  return (
    <section className={styles.toolboxSection}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/toolbox-illustration.png"
          alt="Illustration of a free SEO toolbox"
          width={600}
          height={500}
          className={styles.featureImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>Free SEO Toolbox</h2>
        <p className={styles.description}>
        Beyond powerful SEO audits, StatsDiscovery offers a suite of free SEO tools that empower you to optimize your website on your own. With these tools, you can quickly generate essential SEO files and content to improve your site’s performance and visibility.        </p>
        <ul className={styles.toolList}>
          {tools.map((tool) => (
            <li key={tool} className={styles.toolListItem}>
              <FiCheckCircle className={styles.checkIcon} />
              <span>{tool}</span>
            </li>
          ))}
        </ul>
        <button className={styles.ctaButton}>Check Them Out</button>
      </div>
    </section>
  );
};

export default ToolboxFeature;