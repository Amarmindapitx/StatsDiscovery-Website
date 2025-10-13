// src/components/seo-audit-pages/SocialMediaFeature/SocialMediaFeature.jsx

import styles from './SocialMediaFeature.module.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const SocialMediaFeature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.gridContainer}>
        {/* These icons will be positioned by the CSS grid */}
        <div className={`${styles.iconWrapper} ${styles.facebook}`}>
          <FaFacebookF />
        </div>
        <div className={`${styles.iconWrapper} ${styles.instagram}`}>
          <FaInstagram />
        </div>
        <div className={`${styles.iconWrapper} ${styles.youtube}`}>
          <FaYoutube />
        </div>
        <div className={`${styles.iconWrapper} ${styles.twitter}`}>
          <FaTwitter />
        </div>

        {/* This text block will be in the center */}
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>Social Media Elements</h2>
          <p className={styles.paragraph}>
            Social Media isn’t SEO, but it’s important none-the-less so that customers can get easy access to your business’s entire online profile.
          </p>
          <p className={styles.paragraph}>
            You’ll get a high level summary of your site’s integration with popular social media platforms including links to a Facebook, Twitter, LinkedIn and Instagram, as well as important website social information such as Facebook Pixel, Open Graph Tags and Twitter Cards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaFeature;