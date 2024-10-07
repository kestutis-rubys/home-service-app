import styles from './SearchCategoryPage.module.scss';

import { useParams } from 'react-router-dom';
// import { demoData } from '../../data/demoData';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';
import { BussinessContext } from '../../context/BussinessContextProvider';
import { useContext } from 'react';

export const SearchCategoryPage = () => {
  const { search } = useParams();

  const { businessData } = useContext(BussinessContext);

  const filteredData =
    businessData &&
    businessData.filter((item) => {
      if (item.category.toLowerCase().includes(search.split('=')[1])) {
        return item;
      }
    });

  return (
    <div className={styles.categoryPageContainer}>
      <ServiceBlock title='Filtered Business' filteredData={filteredData} />
    </div>
  );
};
