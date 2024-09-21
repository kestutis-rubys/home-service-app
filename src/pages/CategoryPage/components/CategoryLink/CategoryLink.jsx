import { getIcon } from '../../../../utils/getIcon';
import styles from './CategoryLink.module.scss';
import { NavLink } from 'react-router-dom';

export const CategoryLink = (props) => {
  const { categoryName, icon, color } = props;
  const Icon = getIcon(icon);
  const link = `/search/${categoryName.toLowerCase()}`;

  const checkIsActive = (isActive) => {
    return isActive
      ? `${styles.linkContainer} ${styles.active}`
      : `${styles.linkContainer}`;
  };

  return (
    <NavLink to={link} className={({ isActive }) => checkIsActive(isActive)}>
      <Icon color={color} size={35} />
      {categoryName}
    </NavLink>
  );
};
