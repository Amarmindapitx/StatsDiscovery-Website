import Image from 'next/image';
import styles from './DashboardHeader.module.css';
import { FiPhone, FiMail, FiHelpCircle } from 'react-icons/fi';

const DashboardHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.clientInfo}>
        <div className={styles.clientLogo}>LOGO</div>
        <div>
          <h2 className={styles.siteName}>seodiscovery.com</h2>
          <p className={styles.clientName}>Client Name</p>
        </div>
      </div>

      <div className={styles.agencyInfoWrapper}>
        <div className={styles.agencyLogo}>Agency Logo</div>
        <div className={styles.agencyDetails}>
          <div className={styles.detailItem}>
            <FiPhone /> Agency Phone Number
          </div>
          <div className={styles.detailItem}>
            <FiMail /> Agency Email Address
          </div>
        </div>
        <a href="#" className={styles.helpLink}><FiHelpCircle /> Helpdesk</a>
      </div>
    </div>
  );
};

export default DashboardHeader;