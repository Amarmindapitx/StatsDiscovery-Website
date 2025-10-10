import Image from 'next/image';
import styles from './CustomizationFeature.module.css';

const CustomizationFeature = () => {
  return (
    <section className={styles.customizationSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>
          Languages and Customization Options
        </h2>
        <p className={styles.description}>
        StatsDiscovery supports multi-language white-label SEO reports, allowing agencies and businesses to deliver audits in languages like English, French, Spanish, and German — with more being added regularly.
        </p>
        <p className={styles.description}>
        Personalize your reports to perfectly match your brand identity.
        Change logos, colors, and fonts, select which audit sections or checks to display, and include custom notes or recommendations for clients.
        With StatsDiscovery, every report feels like your own — professional, branded, and client-ready.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/customization-image.png" 
          alt="A preview of customization options"
          width={500} 
          height={450} 
          className={styles.previewImage}
        />
      </div>
    </section>
  );
};

export default CustomizationFeature;