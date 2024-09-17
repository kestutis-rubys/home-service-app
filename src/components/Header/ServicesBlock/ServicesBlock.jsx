import styles from './ServicesBlock.module.scss';

import {
  IoConstruct,
  IoBrush,
  IoHammer,
  IoFlash,
  IoCar,
  IoHome,
} from 'react-icons/io5';
import { ServiceCard } from './ServiceCard/ServiceCard';

export const ServicesBlock = () => {
  const categories = [
    { name: 'Cleaning', icon: <IoHome />, color: '#a72ee0' },
    { name: 'Repair', icon: <IoConstruct />, color: '#e1b953' },
    { name: 'Painting', icon: <IoBrush />, color: '#469c98' },
    { name: 'Shifting', icon: <IoCar />, color: '#d04d45' },
    { name: 'Plumbing', icon: <IoHammer />, color: '#d8953d' },
    { name: 'Electric', icon: <IoFlash />, color: '#295fb7' },
  ];

  return (
    <div className={styles.servicesContainer}>
      {categories.map((item, i) => (
        <ServiceCard
          key={i}
          text={item.name}
          icon={item.icon}
          color={item.color}
        />
      ))}
    </div>
  );
};
