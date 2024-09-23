import styles from './SearchCategoryPage.module.scss';

import { useParams } from 'react-router-dom';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { demoData } from '../../data/demoData';

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
      <h1>Business</h1>
      <div className={styles.categoryPageCardsContainer}>
        {!filteredData.length ? (
          <p>Business was not found</p>
        ) : (
          filteredData.map((item, i) => <ServiceCard key={i} data={item} />)
        )}
      </div>
    </div>
  );
};
