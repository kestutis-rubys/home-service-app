import styles from './ServiceCard.module.scss';
import { Button } from '../Button/Button';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleBusinessClick = () => {
    navigate(`/detail/${serviceName.split(' ').join('-').toLowerCase()}`, {
      state: data,
    });
  };

  return (
    <div className={styles.cardContainer} onClick={() => handleBusinessClick()}>
      <img src={photoUrl} alt={serviceName} />
      <div className={styles.textContainer}>
        <h3>{category}</h3>
        <h2>{serviceName}</h2>
        <div>
          <h4>{name}</h4>
          <p>{address}</p>
        </div>
        <Button
          style='service'
          type='button'
          text='Book now'
          disabled={false}
        />
      </div>
    </div>
  );
};
