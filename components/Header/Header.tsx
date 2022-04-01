import { Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import styles from './Header.module.scss';

const CustomHeader = ({activeTab}) => {
  return (
    <Header className={styles.header}>
      <div className="logo" />
      <Menu mode="horizontal" defaultSelectedKeys={[activeTab]}>
        <Menu.Item key="/adverts">
          <a href="/adverts"  rel="noopener noreferrer">
          Объявления
          </a>
        </Menu.Item>
        <Menu.Item key="/profile">
          <a href="/profile" rel="noopener noreferrer">
          Профиль
          </a>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default CustomHeader;
