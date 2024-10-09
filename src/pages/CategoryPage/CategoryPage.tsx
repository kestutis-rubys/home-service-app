import styles from './CategoryPage.module.scss';

import { useParams } from 'react-router-dom';
import CategoriesSidebar from './components/CategoriesSidebar/CategoriesSidebar';
import { PuffLoader } from 'react-spinners';
import { useContext, useEffect, useState } from 'react';
import { ServiceCard } from '../../components/ServiceCard/ServiceCard';
import { BussinessContext } from '../../context/BussinessContextProvider';

interface BusinessData {
  id: number;
  category: string;
  serviceName: string;
  name: string;
  address: string;
  photoUrl: string;
}

export const CategoryPage: React.FC = () => {
  const [filteredBusiness, setFilteredBusiness] = useState<
    BusinessData[] | null
  >(null);
  const { category } = useParams<{ category?: string }>();

  const formattedCategoryName = category
    ? category.charAt(0).toUpperCase() + category.slice(1)
    : '';

  const context = useContext(BussinessContext);

  useEffect(() => {
    const filteredData =
      context?.businessData?.filter(
        (item) => item.category === formattedCategoryName,
      ) ?? null;
    setFilteredBusiness(filteredData);
  }, [category, context?.businessData]);

  return (
    <div className={styles.categoryPageContainer}>
      <CategoriesSidebar />
      <div className={styles.categoryPageContent}>
        <h1>{formattedCategoryName}</h1>
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
