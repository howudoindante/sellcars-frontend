import { Card, message } from 'antd';
import { Spin } from 'antd';

import Meta from 'antd/lib/card/Meta';
import React from 'react';
import {  useSelector } from 'react-redux';


import styles from './AdvertsList.module.scss';
import { useRouter } from 'next/router';

const AdvertsList = () => {
  const router = useRouter();
  const { adverts, isLoading, error } = useSelector(
    (state) => state.advertReducer
  );
  if(error){
    message.error(error,3)
  }
  return (
    <Spin spinning={isLoading}>
      <div className={styles['adverts-list']}>
        {adverts.ad.length > 0
          ? adverts.ad.map((item) => (
              <Card
                hoverable
                style={{ width: '100%' }}
                className={styles['adverts-list__card']}
                cover={<img alt='example' className={styles['adverts-list__card-image']} src={item.image} />}
                onClick={()=>router.push(router.pathname + "/" + item._id)}
              >
                <Meta title={item.title} description={item.price + `Р`} />
              </Card>
            ))
          : null}
      </div>
    </Spin>
  );
};

export default AdvertsList;
