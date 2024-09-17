import styles from './Header.module.scss';

import { TextInput } from '../TextInput/TextInput';

import { IoSearch } from 'react-icons/io5';
import { ServicesBlock } from './ServicesBlock/ServicesBlock';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTextContainer}>
        <h1>
          Find Home <span>Service/Repair</span> Near You
        </h1>
        <h2>Explore Best Home Service & Repair near you</h2>
      </div>
      <div className={styles.headerInputContainer}>
        <TextInput type='search' placeholder='Search...' />
        <IoSearch className={styles.headerSearchIcon} />
      </div>
      <ServicesBlock />
    </header>
  );
};
