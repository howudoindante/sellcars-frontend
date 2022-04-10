import { Card, Col, Row } from 'antd';
import { Spin } from 'antd';

import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import styles from './AdvertsList.module.scss';
import { useRouter } from 'next/router';

const AdvertsList = () => {
  const router = useRouter();
  const { adverts, isLoading, error } = useSelector(
    (state) => state.advertReducer
  );

  return (
    <Spin spinning={isLoading}>
      <div className={styles['adverts-list']}>
        {adverts.ad.length > 0
          ? adverts.ad.map((item) => (
              <Card
                hoverable
                style={{ width: '100%' }}
                cover={<img alt='example' src={item.image} />}
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
