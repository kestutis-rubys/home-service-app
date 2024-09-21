import { useNavigate } from 'react-router-dom';
import styles from './ServiceCategoriyCard.module.scss';
import { getIcon } from '../../../../utils/getIcon';

export const ServiceCategoriyCard = (props) => {
  const { text, icon, color } = props;
  const Icon = getIcon(icon);

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/search/${text.toLowerCase()}`);
  };

  return (
    <div className={styles.serviceCard} onClick={handleCategoryClick}>
      <div style={{ color: color }} className={styles.serviceCardIcon}>
        <Icon />
      </div>
      <h4>{text}</h4>
    </div>
  );
};
