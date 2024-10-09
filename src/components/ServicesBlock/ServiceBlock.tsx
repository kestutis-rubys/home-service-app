import styles from './ServiceBlock.module.scss';
import { ServiceCard } from '../ServiceCard/ServiceCard';
import { BussinessContext } from '../../context/BussinessContextProvider';
import { useContext } from 'react';
import { BusinessData } from '../../hooks/useBusinessFetch';

type BusinessDataArray = BusinessData[];

interface ServiceBlockProps {
  title: string;
  searchText?: string;
  filteredData?: BusinessDataArray;
}

export const ServiceBlock: React.FC<ServiceBlockProps> = (props) => {
  const { title, searchText, filteredData } = props;

  const context = useContext(BussinessContext);
  const businessData = context?.businessData;

  return (
    <div className={styles.serviceBlockContainer}>
      <h2>
        {title}
        <span>{searchText}</span>
      </h2>
      <div className={styles.serviceBlockContainerCards}>
        {filteredData
          ? filteredData.map((item, i) => <ServiceCard key={i} data={item} />)
          : businessData &&
            businessData.map((item, i) => <ServiceCard key={i} data={item} />)}
      </div>
    </div>
  );
};
