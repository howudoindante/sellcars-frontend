import { Form, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios';
import { FunctionComponent, useEffect, useState } from 'react';
import styles from '../../styles/AuthForm.module.scss';

const AuthForm: FunctionComponent = () => {
    const [form] = Form.useForm();
    const [token,setToken] = useState(null);
    
      const onFinish = (body: any) => {
        axios.post(
            "http://localhost:5000/auth/login/", 
            body
            ).then(response => {
                setToken(response.data.token);
            });
      };
    
      
  useEffect(()=>{
    console.log(token);
  },[token])  
      
  return (
    <div className={styles.authform}>
      <div className={styles.authformContent}>
      <Form layout="vertical" form={form} name='control-hooks' onFinish={onFinish}>
        <Form.Item name='username' label='Имя пользователя' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name='password' label='Пароль' rules={[{ required: true }]}>
          <Input />
        </Form.Item>
       
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Войти
          </Button>
          
          <Button type='link' htmlType='button' >
            Забыли пароль?
          </Button>
        </Form.Item>
      </Form>
      </div>
    </div>
  );
};

export default AuthForm;
