import styles from './ServiceCategoryCard.module.scss';

import { useNavigate } from 'react-router-dom';
import getIcon from '../../../../utils/getIcon';
import { CategoryData } from '../../../../hooks/useCategoriesFetch';

interface ServiceCategoryCardProps {
  data: CategoryData;
}

export const ServiceCategoryCard: React.FC<ServiceCategoryCardProps> = ({
  data,
}) => {
  const { name, icon, color } = data;

  const Icon = getIcon(icon);

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/search/${name.toLowerCase()}`);
  };

  return (
    <div className={styles.serviceCard} onClick={handleCategoryClick}>
      <div style={{ color: color }} className={styles.serviceCardIcon}>
        <Icon />
      </div>
      <h4>{name}</h4>
    </div>
  );
};
