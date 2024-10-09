import React, { useContext } from 'react';
import { PuffLoader } from 'react-spinners';
import { CategoriesContext } from '../../../../context/CategoriesContextProvider';
import { CategoryLink } from '../CategoryLink/CategoryLink';
import styles from './CategoriesSidebar.module.scss';

const CategoriesSidebar: React.FC = () => {
  const context = useContext(CategoriesContext);

  return (
    <div className={styles.categoriesSidebarContainer}>
      <h2>Categories</h2>
      <div className={styles.categoriesLinksBlock}>
        {!context?.categoriesData ? (
          <PuffLoader color={'#785be6'} />
        ) : (
          context.categoriesData.map((item, i) => (
            <CategoryLink key={i} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default CategoriesSidebar;
