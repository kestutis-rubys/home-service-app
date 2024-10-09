import styles from './ServicePage.module.scss';
import { ServiceBlock } from '../../components/ServicesBlock/ServiceBlock';

export const ServicePage: React.FC = () => {
  return (
    <div className={styles.servicePageContainer}>
      <ServiceBlock title='All Services' />
    </div>
  );
};
