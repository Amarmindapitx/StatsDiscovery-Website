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
          White Label SEO Reports are available in several languages including French, Spanish and German, with more being added.
        </p>
        <p className={styles.description}>
          Customize reports to your heart’s desire - change colors and fonts. Choose which checks and sections to show, and add custom content for that personal touch.
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