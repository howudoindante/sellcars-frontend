import { Button } from 'antd';
import { LogoutOutlined, LoginOutlined } from '@ant-design/icons';
import { getToken, removeToken } from '../../../constants/Token';
import React from 'react';

const AccountActions = () => {
  return (
    <>
      {getToken() ? (
        <Button
          href='/auth/login'
          icon={<LogoutOutlined />}
          onClick={removeToken}
          type='text'
        >
          Выход
        </Button>
      ) : (
        <Button href='/auth/login' icon={<LoginOutlined />} type='text'>
          Вход
        </Button>
      )}
    </>
  );
};

export default AccountActions;
