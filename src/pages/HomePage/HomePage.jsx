import styles from './HomePage.module.scss';

import { Header } from '../../components/Header/Header';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div className={styles.homePageContainer}>
        <ServiceBlock title='Popular Business' />
      </div>
    </>
  );
};
