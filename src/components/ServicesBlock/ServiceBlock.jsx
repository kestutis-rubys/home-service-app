import styles from './ServiceBlock.module.scss';
import { demoData } from '../../data/demoData';
import { ServiceCard } from '../ServiceCard/ServiceCard';

export const ServiceBlock = (props) => {
  const { title, data } = props;
  return (
    <div className={styles.serviceBlockContainer}>
      <h2>{title}</h2>
      <div className={styles.serviceBlockContainerCards}>
        {data
          ? data.map((item, i) => <ServiceCard key={i} data={item} />)
          : demoData.map((item, i) => <ServiceCard key={i} data={item} />)}
      </div>
    </div>
  );
};
