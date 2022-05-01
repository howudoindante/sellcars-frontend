import { Avatar, Button, Image, Skeleton } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import styles from './DetailAdvert.module.scss';
const DetailAdvert = ({ advert, isOwnerView , onDelete ,onEdit }) => {
  
  if (advert) {
    return (
      <div className={styles['detail-advert']}>
        <div className={styles['detail-advert__meta']}>
          <h1 className={styles['detail-advert__title']}>{advert.title}</h1>
          <p className={styles['detail-advert__description']}>
            {advert.description}
          </p>
          <p className={styles['detail-advert__price']}>{advert.price} ₽</p>
          {isOwnerView && (
            <div className={styles['detail-advert__controls']}>
              <Button shape='circle' icon={<EditOutlined />} onClick={onEdit}/>
              <Button shape='circle' icon={<DeleteOutlined />} onClick={onDelete}/>
            </div>
          )}

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
