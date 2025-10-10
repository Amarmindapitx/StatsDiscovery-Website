// src/components/ProductPreview/ProductPreview.jsx

import Image from 'next/image';
import styles from './ProductPreview.module.css';

const ProductPreview = () => {
  return (
    <div className={styles.previewContainer}>
      <Image
        // Make sure this path is correct for your image in the `public` folder
        src="/assets/index_en.png" 
        alt="A preview of the StatsDiscovery SEO audit report"
        width={1110}
        height={625}
        className={styles.previewImage}
        priority 
      />
    </div>
  );
};

export default ProductPreview;