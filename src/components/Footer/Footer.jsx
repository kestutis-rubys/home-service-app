import styles from './Footer.module.scss';

export const Footer = () => {
  const date = new Date();

  return (
    <div className={styles.footerContainer}>
      <div>© {date.getFullYear()}. Stars Repair</div>
    </div>
  );
};
