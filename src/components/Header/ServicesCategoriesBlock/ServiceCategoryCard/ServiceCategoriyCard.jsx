import styles from './ServiceCategoriyCard.module.scss';

export const ServiceCategoriyCard = (props) => {
  const { text, icon, color } = props;

  return (
    <div className={styles.serviceCard}>
      <div style={{ color: color }} className={styles.serviceCardIcon}>
        {icon}
      </div>
      <h4>{text}</h4>
    </div>
  );
};
