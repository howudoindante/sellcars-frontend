import { Button, Menu } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import React from 'react';
import AccountActions from './AccountActions/AccountActions';
import styles from './Header.module.scss';


const CustomHeader = ({ activeTab }) => {
  return (
    <Header className={styles.header}>
      <Menu mode='horizontal' defaultSelectedKeys={[activeTab]}>
        <Menu.Item key='/adverts'>
          <a href='/adverts' rel='noopener noreferrer'>
            Объявления
          </a>
        </Menu.Item>
      </Menu>
      <div className={styles.accountActions}>
        <AccountActions/>
      </div>
    </Header>
  );
};

export default CustomHeader;
