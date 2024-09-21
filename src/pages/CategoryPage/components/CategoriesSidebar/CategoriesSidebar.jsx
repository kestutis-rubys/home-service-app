import styles from './CategoriesSidebar.module.scss';
import { useContext } from 'react';
import { CategoriesContext } from '../../../../context/CategoriesContextProvider';
import { PuffLoader } from 'react-spinners';
import { CategoryLink } from '../CategoryLink/CategoryLink';

export const CategoriesSidebar = () => {
  const { categoriesData } = useContext(CategoriesContext);

  return (
    <div className={styles.categoriesSidebarContainer}>
      <h2>Categories</h2>
      <div className={styles.categoriesLinksBlock}>
        {!categoriesData ? (
          <PuffLoader color={'#785be6'} />
        ) : (
          categoriesData.map((item, i) => (
            <CategoryLink
              key={i}
              categoryName={item.name}
              icon={item.icon}
              color={item.color}
            />
          ))
        )}
      </div>
    </div>
  );
};
