import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import styles from './FeaturesGrid.module.css';

const features = [
  {
    title: 'SEO Audits',
    description: 'Comprehensively audit a site and generate White Label Reports or Embed.',
    imageSrc: '/assets/features/seo-audits.png',
  },
  {
    title: 'SEO Crawler',
    description: 'Perform a detailed scan of every page of your site for problems that could be holding it back.',
    imageSrc: '/assets/features/seo-crawler.png',
  },
  {
    title: 'Keyword Tracking',
    description: 'Track the progress of search rankings over time by country, language, search engine and device type.',
    imageSrc: '/assets/features/keyword-tracking.png',
  },
  {
    title: 'Keyword Research',
    description: 'Research competitors and find opportunities with search volume, competition and CPC data.',
    imageSrc: '/assets/features/keyword-research.png',
  },
  {
    title: 'Backlink Research',
    description: 'Understand any site’s backlink profile and discover link building opportunities.',
    imageSrc: '/assets/features/backlink-research.png',
  },
  {
    title: 'Backlink Monitoring',
    description: 'Get notified of new and lost links, protect from negative SEO, and build a great link profile.',
    imageSrc: '/assets/features/backlink-monitoring.png',
  },
  {
    title: 'Bulk Reporting',
    description: 'Generate thousands of branded SEO Audits.',
    imageSrc: '/assets/features/bulk-reporting.png',
  },
  {
    title: 'API',
    description: 'Run audits at scale or integrate into your workflows.',
    imageSrc: '/assets/features/api.png',
  },
];

export default function FeaturesGrid() {
  return (
    <section className={styles.featuresSection}>
        <div className={styles.header}>
            <h2 className={styles.title}>All-In-One SEO Platform</h2>
            <p className={styles.subtitle}>
                A complete suite of tools to help you with every aspect of your SEO strategy.
            </p>
        </div>
        <div className={styles.gridContainer}>
            {features.map((feature) => (
            <CardContainer key={feature.title} className={styles.cardContainer}>
              <CardBody className={styles.cardBody}>
                <CardItem translateZ="60" className={styles.imageWrapper}>
                  <Image
                    src={feature.imageSrc}
                    height="400"
                    width="600"
                    className={styles.cardImage}
                    alt={`${feature.title} feature illustration`}
                  />
                </CardItem>
                <CardItem translateZ="40" as="h3" className={styles.cardTitle}>
                  {feature.title}
                </CardItem>
                <CardItem as="p" translateZ="20" className={styles.cardDescription}>
                  {feature.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
    </section>
  );
}