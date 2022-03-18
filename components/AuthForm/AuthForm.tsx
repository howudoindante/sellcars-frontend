import { Form, Input, Button, Checkbox, Select, Spin } from 'antd';
import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from '../../styles/AuthForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  TokenActionsTypes,
  ITokenDispatch,
} from '../../types/Token';

const AuthForm: FunctionComponent = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<ITokenDispatch>();
  const { token, isLoading } = useSelector((state) => state.tokenReducer);
  const onFinish = (body: any) => {
    dispatch({ type: TokenActionsTypes.START_LOADING });
    axios.post('http://localhost:5000/auth/login/', body).then((response) => {
      dispatch({
        type: TokenActionsTypes.SET_TOKEN,
        payload: response.data.token,
      });
      dispatch({ type: TokenActionsTypes.END_LOADING });
    });
  };

  return (
    <Spin spinning={isLoading}>
      <div className={styles.authform}>
        <div className={styles.authformContent}>
          <Form
            layout='vertical'
            form={form}
            name='control-hooks'
            onFinish={onFinish}
          >
            <Form.Item
              name='username'
              label='Имя пользователя'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name='password'
              label='Пароль'
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Войти
              </Button>

              <Button type='link' htmlType='button'>
                Забыли пароль?
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Spin>
  );
};

export default AuthForm;
