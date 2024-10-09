import styles from './ServicesCategoriesBlock.module.scss';
import { PuffLoader } from 'react-spinners';
import { ServiceCategoryCard } from './ServiceCategoryCard/ServiceCategoryCard';
import { CategoriesContext } from '../../../context/CategoriesContextProvider.js';
import { useContext } from 'react';

export const ServicesCategoriesBlock: React.FC = () => {
  const context = useContext(CategoriesContext);

  return (
    <div className={styles.servicesContainer}>
      {context?.categoriesData ? (
        context.categoriesData.map((item, i) => (
          <ServiceCategoryCard key={i} data={item} />
        ))
      ) : (
        <PuffLoader color='#785be6' size={55} />
      )}
    </div>
  );
};
