import styles from './SearchCategoryPage.module.scss';

import { useParams } from 'react-router-dom';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';
import { BussinessContext } from '../../context/BussinessContextProvider.js';
import { useContext } from 'react';

export const SearchCategoryPage = () => {
  const { search } = useParams<{ search: string }>();
  const searchParams = new URLSearchParams(search);
  const searchText = searchParams.get('search')?.toLowerCase();

  const context = useContext(BussinessContext);

  const filteredData =
    context?.businessData &&
    context.businessData.filter((item) => {
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
