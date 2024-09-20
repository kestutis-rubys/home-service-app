import { useParams } from 'react-router-dom';
import { CategoriesSidebar } from './components/CategoriesSidebar/CategoriesSidebar';
import styles from './CategoryPage.module.scss';

export const CategoryPage = () => {
  const { category } = useParams();
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={styles.categoryPageContainer}>
      <CategoriesSidebar />
      <div className={styles.categoryPageContent}>
        <h1>{categoryName}</h1>
      </div>
    </div>
  );
};
