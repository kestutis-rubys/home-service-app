import styles from './ServicesCategoriesBlock.module.scss';

import { useEffect, useState } from 'react';
import { PuffLoader } from 'react-spinners';
import { ServiceCategoriyCard } from './ServiceCategoryCard/ServiceCategoriyCard';
import axios from 'axios';

export const ServicesCategoriesBlock = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/categories')
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div className={styles.servicesContainer}>
      {categories ? (
        categories.map((item, i) => (
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
