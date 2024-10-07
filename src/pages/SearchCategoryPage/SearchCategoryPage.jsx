import styles from './SearchCategoryPage.module.scss';

import { useParams } from 'react-router-dom';
import { demoData } from '../../data/demoData';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';

export const SearchCategoryPage = () => {
  const { search } = useParams();

  const filteredData = demoData.filter((item) => {
    for (item of Object.values(item)) {
      if (item.toLowerCase().includes(search.split('=')[1])) {
        return item;
      }
    }
  });

  return (
    <div className={styles.categoryPageContainer}>
      <ServiceBlock title='Filtered Business' data={filteredData} />
    </div>
  );
};
