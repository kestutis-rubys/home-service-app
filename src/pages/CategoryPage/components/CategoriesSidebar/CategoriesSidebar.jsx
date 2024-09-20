import styles from './CategoriesSidebar.module.scss';
import categories from '../../../../data/demoData';

export const CategoriesSidebar = () => {
  return (
    <div className={styles.categoriesSidebarContainer}>
      <h2>Categories</h2>
      {categories[0].icon}
      <div className={styles.categoriesLinksBlock}></div>
    </div>
  );
};
