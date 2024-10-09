import styles from './ServiceCard.module.scss';
import { Button } from '../Button/Button';

interface BusinessData {
  category: string;
  serviceName: string;
  name: string;
  address: string;
  photoUrl: string;
}

interface ServiceCardProps {
  data: BusinessData;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  const { category, serviceName, name, address, photoUrl } = data;

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
        <Button style='service' type='button' text='Book now' />
      </div>
    </div>
  );
};
