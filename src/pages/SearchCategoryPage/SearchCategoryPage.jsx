import styles from './SearchCategoryPage.module.scss';

import { useParams } from 'react-router-dom';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';
import { BussinessContext } from '../../context/BussinessContextProvider';
import { useContext } from 'react';

export const SearchCategoryPage = () => {
  const { search } = useParams();
  const searchParams = new URLSearchParams(search);
  const searchText = searchParams.get('search').toLowerCase();

  const { businessData } = useContext(BussinessContext);

  const filteredData =
    businessData &&
    businessData.filter((item) => {
      if (item.category.toLowerCase().includes(searchText)) {
        return item;
      }
    });

  return (
    <div className={styles.categoryPageContainer}>
      <ServiceBlock
        title='Filtered Businesses by search text:'
        searchText={searchText}
        filteredData={filteredData}
      />
    </div>
  );
};
