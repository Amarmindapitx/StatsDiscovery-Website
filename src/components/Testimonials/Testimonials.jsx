// src/components/Testimonials/Testimonials.jsx

import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    text: 'StatsDiscovery has been a game changer for my SEO business. The setup is so intuitive and quick, beautiful reports, great support and my clients are loving the results.',
    name: 'Kay Telle Hoel',
    title: 'Digitelle AS',
    avatarSrc: '/images/avatars/avatar-kay.jpg',
    borderColor: '#29D3A4'
  },
  {
    text: 'StatsDiscovery is by far the best SEO review site on the web. I use it all the time for my site and my clients.',
    name: 'Dillon Ross',
    title: 'The Dillon Ross Group',
    avatarSrc: '/images/avatars/avatar-dillon.jpg',
    borderColor: '#FDBA49'
  },
  {
    text: 'Outstanding value for the money. Solid data and insight for prospecting and value added services.',
    name: 'Vincent Maiello',
    title: 'SEO One B & Company',
    avatarSrc: '/images/avatars/avatar-vincent.jpg',
    borderColor: '#9B51E0'
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.mainHeading}>What our awesome customers are saying</h2>
      <div className={styles.gridContainer}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.name} className={styles.card} style={{ borderTopColor: testimonial.borderColor }}>
            <p className={styles.cardText}>{testimonial.text}</p>
            <span className={styles.quoteIcon}>“</span>
            <footer className={styles.cardFooter}>
              <Image
                src={testimonial.avatarSrc}
                alt={`Avatar of ${testimonial.name}`}
                width={40}
                height={40}
                className={styles.avatar}
              />
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonial.name}</span>
                <span className={styles.authorTitle}>{testimonial.title}</span>
              </div>
            </footer>
          </div>
        ))}
      </div>
    </section>
  );
};

// This is the line you need to add or fix
export default Testimonials;