import { Avatar, Image, Skeleton } from 'antd';
import { useEffect } from 'react';
import styles from './DetailAdvert.module.scss';
const DetailAdvert = ({ advert }) => {
  if (advert) {
    return (
      <div className={styles['detail-advert']}>
        <div className={styles['detail-advert__meta']}>
          <h1 className={styles['detail-advert__title']}>{advert.title}</h1>
          <p className={styles['detail-advert__description']}>
            {advert.description}
          </p>
          <p className={styles['detail-advert__price']}>{advert.price} ₽</p>
          <div className={styles['detail-advert__author']}>
            <Avatar size={'large'} src='https://joeschmoe.io/api/v1/random' />
            <span className={styles['detail-advert__author-name']}>
              {advert.author}
            </span>
          </div>
        </div>
        <Image
          style={{ maxWidth: '500px' }}
          className={styles['advert-image']}
          src={advert.image}
        />
      </div>
    );
  } else {
    return <Skeleton />;
  }
};
export default DetailAdvert;
