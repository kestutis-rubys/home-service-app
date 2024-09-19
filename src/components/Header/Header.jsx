import styles from './Header.module.scss';

import { TextField } from '../TextField/TextField';

import { IoSearch } from 'react-icons/io5';
import { ServicesCategoriesBlock } from './ServicesCategoriesBlock/ServicesCategoriesBlock';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTextContainer}>
        <h1>
          Find Home <span>Service/Repair</span> Near You
        </h1>
        <h2>Feel like a star at your own home</h2>
      </div>
      <div className={styles.headerInputContainer}>
        <TextField style='search' placeholder='Search...' />
        <IoSearch className={styles.headerSearchIcon} />
      </div>
      <ServicesCategoriesBlock />
    </header>
  );
};
