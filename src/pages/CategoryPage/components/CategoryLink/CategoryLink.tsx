import styles from './CategoryLink.module.scss';

import { NavLink } from 'react-router-dom';
import getIcon from '../../../../utils/getIcon';
import { CategoryData } from '../../../../hooks/useCategoriesFetch';

export interface CategoryLinkProps {
  data: CategoryData;
}

export const CategoryLink: React.FC<CategoryLinkProps> = ({ data }) => {
  const { name, icon, color } = data;

  const Icon = getIcon(icon);
  const link = `/search/${name.toLowerCase()}`;

  const checkIsActive = (isActive: Boolean) => {
    return isActive
      ? `${styles.linkContainer} ${styles.active}`
      : `${styles.linkContainer}`;
  };

  return (
    <NavLink to={link} className={({ isActive }) => checkIsActive(isActive)}>
      <Icon color={color} size={35} />
      {name}
    </NavLink>
  );
};
