import styles from './Footer.module.scss';

export const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.footerContainer}>
      © {date.getFullYear()}. Stars Repair
    </div>
  );
};
