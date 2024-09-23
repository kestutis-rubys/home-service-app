import styles from './CategoryPage.module.scss';
import { useParams } from 'react-router-dom';
import { CategoriesSidebar } from './components/CategoriesSidebar/CategoriesSidebar';
import { PuffLoader } from 'react-spinners';
import { demoData } from '../../data/demoData';
import { useEffect, useState } from 'react';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';

export const CategoryPage = () => {
  const [filteredBusiness, setFilteredBusiness] = useState(null);
  const { category } = useParams();
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  useEffect(() => {
    const filteredData = demoData.filter(
      (item) => item.category === categoryName
    );
    setFilteredBusiness(filteredData);
  }, [category]);

  return (
    <div className={styles.categoryPageContainer}>
      <CategoriesSidebar />
      <div className={styles.categoryPageContent}>
        <h1>{categoryName}</h1>
        <div className={styles.categoryPageCardsContainer}>
          {!filteredBusiness ? (
            <PuffLoader color='#785be6' size={55} />
          ) : (
            filteredBusiness.map((item, i) => (
              <ServiceCard key={i} data={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
