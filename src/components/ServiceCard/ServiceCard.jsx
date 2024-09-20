import styles from './ServiceCard.module.scss';
import { Button } from '../Button/Button';

export const ServiceCard = (props) => {
  const { category, serviceName, name, address, photoUrl } = props.data;

  return (
    <div className={styles.cardContainer}>
      <img src={photoUrl} alt={serviceName} />
      <div className={styles.textContainer}>
        <h3>{category}</h3>
        <h2>{serviceName}</h2>
        <div>
          <h4>{name}</h4>
          <p>{address}</p>
        </div>
        <Button style='service' text='Book now' />
      </div>
    </div>
  );
};
