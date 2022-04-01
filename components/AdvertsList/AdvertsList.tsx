import { Card, Col, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import styles from './AdvertsList.module.scss';
const cardData = {
  image:
    'https://steamuserimages-a.akamaihd.net/ugc/796489100042087820/D618BE82026B8EB7F924B03875EC36D93E55680C/?imw=512&amp;imh=326&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
  title: 'Nissan Silvia S15',
  price: 30_000,
};

const data = [
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
  cardData,
];
const AdvertsList = () => {
  return (
    <div className={styles["adverts-list"]}>
      {data.map((item) => (
        <Card
          hoverable
          style={{ width: "100%" }}
          cover={
            <img
              alt='example'
              src={item.image}
            />
          }
        >
          <Meta title={item.title} description={item.price + `Р`} />
        </Card>
      ))}
    </div>
  );
};

export default AdvertsList;
