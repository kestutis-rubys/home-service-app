import styles from './Header.module.scss';

import { TextField } from '../TextField/TextField';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { IoSearch } from 'react-icons/io5';
import { ServicesCategoriesBlock } from './ServicesCategoriesBlock/ServicesCategoriesBlock';
import { useEffect, useState } from 'react';
import { Button } from '../Button/Button';

export const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInputData, setSearchInputData] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchInputData(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (searchParams.size) {
      navigate(`/category/${searchParams}`);
    }
  }, [searchParams]);

  const handleSearchInput = (e) => {
    e.preventDefault();
    if (searchInputData.length) {
      setSearchParams({ search: searchInputData });
    }
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerTextContainer}>
        <h1>
          Find Home <span>Service/Repair</span> Near You
        </h1>
        <h2>Feel like a star at your own home</h2>
      </div>
      <form
        className={styles.headerInputFormContainer}
        onSubmit={handleSearchInput}
      >
        <TextField
          style='search'
          onChange={handleChange}
          placeholder='Search...'
          onFocus={() => setSearchInputData('')}
          value={searchInputData}
        />
        <Button style='icon' icon={<IoSearch />} />
      </form>
      <ServicesCategoriesBlock />
    </header>
  );
};
