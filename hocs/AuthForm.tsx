import React, { FunctionComponent, useEffect } from 'react';
import { Form, Input, Button, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { authController, serviceName } from '../api/Auth';
import AuthForm from '../components/AuthForm/AuthForm';
import { setAuthError } from '../state/actions/auth';
import { getToken } from '../constants/Token';
import { useRouter } from 'next/router';

interface RecievedProps {
  serviceName: serviceName;
}
const handler = (Component: FunctionComponent) => {
  return function Wrapper(props: RecievedProps) {
    const { isLoading, error } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    const router = useRouter();
    const [form] = Form.useForm();

    const { serviceName } = props;

    const onFinish = (body: any) => {
      dispatch(setAuthError(false));
      dispatch(authController({ serviceName, body }));
    };

    if (!error && getToken()) {
      message.success({
        content: 'Авторизация успешна!',
        key: 'updatable',
        duration: 2,
      });
    }

    if (error) {
      message.error({ content: error, key: 'updatable', duration: 2 });
    }

    useEffect(() => {
      if (getToken()) {
        router.push('/adverts');
      }
    }, [getToken()]);

    return (
      <>
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
            {serviceName === 'login' ? (
              <Form.Item>
                Нет аккаунта?
                <Button href='/auth/register' type='link' htmlType='button'>
                  Зарегистрироваться
                </Button>
              </Form.Item>
            ) : (
              <Form.Item>
                Есть аккаунт?
                <Button href='/auth/login' type='link' htmlType='button'>
                  Войти
                </Button>
              </Form.Item>
            )}
          </Form>
        </Component>
      </>
    );
  };
};

export default handler(AuthForm);
