import styles from './ServicesCategoriesBlock.module.scss';
import { PuffLoader } from 'react-spinners';
import { ServiceCategoriyCard } from './ServiceCategoryCard/ServiceCategoriyCard';
import { CategoriesContext } from '../../../context/CategoriesContextProvider.jsx';
import { useContext } from 'react';

export const ServicesCategoriesBlock = () => {
  const { categoriesData } = useContext(CategoriesContext);

  return (
    <div className={styles.servicesContainer}>
      {categoriesData ? (
        categoriesData.map((item, i) => (
          <ServiceCategoriyCard
            key={i}
            text={item.name}
            icon={item.icon}
            color={item.color}
          />
        ))
      ) : (
        <PuffLoader color='#785be6' size={55} />
      )}
    </div>
  );
};
