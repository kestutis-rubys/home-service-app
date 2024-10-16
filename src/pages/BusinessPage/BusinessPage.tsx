import styles from './BusinessPage.module.scss';
import React, { useContext } from 'react';
import {
  IoLocationOutline,
  IoMailOutline,
  IoCloudDownloadOutline,
  IoPersonOutline,
  IoTimeOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

import { useLocation, useNavigate } from 'react-router-dom';
import { BussinessContext } from '../../context/BussinessContextProvider';
import { Button } from '../../components/Button/Button';

const BusinessPage: React.FC = () => {
  const location = useLocation();
  const data = location.state;
  const context = useContext(BussinessContext);
  const navigate = useNavigate();

  const getGallery = () => {
    const gallery: string[] = [];
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    for (let i = randomNumber; i <= 5; i++) {
      gallery.push(data.photoUrl);
    }
    return gallery;
  };

  const getSimilarBusiness = () => {
    return context?.businessData.filter(
      (item) =>
        item.category === data.category &&
        item.serviceName !== data.serviceName,
    );
  };

  const handleBusinessClick = (item: any) => () => {
    console.log(item);
    navigate(`/detail/${item.serviceName.split(' ').join('-').toLowerCase()}`, {
      state: item,
    });
  };

  return (
    <div className={styles.businessPageContainer}>
      <div className={styles.userBlock}>
        <div className={styles.userInformation}>
          <img src={data.photoUrl} alt={data.serviceName} />
          <div>
            <h4>{data.category}</h4>
            <h2>{data.serviceName}</h2>
            <p>
              <IoLocationOutline size={20} /> {data.address}
            </p>
            <p>
              <IoMailOutline size={20} />{' '}
              {`${data.name.split(' ').join('.').toLowerCase()}@gmail.com`}
            </p>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <IoCloudDownloadOutline
            color='#fff'
            size={40}
            className={styles.downloadIcon}
          />
          <div>
            <p>
              <IoPersonOutline size={20} /> {data.name}
            </p>
            <p>
              <IoTimeOutline size={20} /> Available 8:00 AM to 10:00 PM
            </p>
          </div>
        </div>
      </div>
      <div className={styles.businessBlock}>
        <div className={styles.businessBlockInfo}>
          <div className={styles.desctriptionBlock}>
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, accusantium asperiores corrupti eveniet omnis
              praesentium nihil eaque tenetur consequatur assumenda in voluptas
              ad tempore. Rerum debitis iste veniam dignissimos nesciunt? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Molestias,
              accusantium asperiores corrupti eveniet omnis praesentium nihil
              eaque tenetur consequatur assumenda in voluptas ad tempore. Rerum
              debitis iste veniam dignissimos nesciunt?
            </p>
          </div>
          <div className={styles.galleryBlock}>
            <h3>Gallery</h3>
            <div className={styles.gallery}>
              {getGallery().map((item, i) => {
                return <img key={i} src={item} alt={String(i)} />;
              })}
            </div>
          </div>
        </div>
        <div className={styles.businessSidebar}>
          <Button
            icon={<IoCalendarOutline />}
            text='Book Appoitnment'
            type='button'
            style='book-appoinment'
          />
          <h4>Similar business</h4>
          {getSimilarBusiness()?.length ? (
            getSimilarBusiness()?.map((item, i) => (
              <div key={i} onClick={handleBusinessClick(item)}>
                <div className={styles.similarBussinessCard}>
                  <img src={item.photoUrl} alt={item.serviceName} />
                  <div className={styles.textBlock}>
                    <h4>{item.serviceName}</h4>
                    <p>{item.name}</p>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No similar business found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
