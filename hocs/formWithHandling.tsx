import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { IAuthDispatch } from '../types/Auth';
import { authController, serviceName } from '../api_controllers/Auth';
import AuthForm from '../components/AuthForm/AuthForm';
import AlertMessage from '../components/Alert/Alert';
import { createAuthErrorAction } from '../state/actions/auth';


interface RecievedProps {
    actionType:serviceName;
}

const handler = (Component: FunctionComponent) => {
  return function Wrapper(props:RecievedProps) {
    const [form] = Form.useForm();
    const dispatch = useDispatch<IAuthDispatch>();
    const { token, isLoading, error } = useSelector(
      (state) => state.authReducer
    );
    const onFinish = (body: any) => {
      dispatch(createAuthErrorAction(false));
      authController({ serviceName: props.actionType, dispatch, body });
    };
    
    return (
      <>
        {error && <AlertMessage message={error} /> }
        <Component {...props} isLoading={isLoading}>
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
        </Component>
      </>
    );
  };
};

export default handler(AuthForm);