import styles from './ServiceBlock.module.scss';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { BussinessContext } from '../../context/BussinessContextProvider';
import { useContext } from 'react';

export const ServiceBlock = (props) => {
  const { title, filteredData } = props;

  const { businessData } = useContext(BussinessContext);

  return (
    <div className={styles.serviceBlockContainer}>
      <h2>{title}</h2>
      <div className={styles.serviceBlockContainerCards}>
        {filteredData
          ? filteredData.map((item, i) => <ServiceCard key={i} data={item} />)
          : businessData &&
            businessData.map((item, i) => <ServiceCard key={i} data={item} />)}
      </div>
    </div>
  );
};
