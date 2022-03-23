import { Spin } from 'antd';
import { FunctionComponent } from 'react';
import styles from './AuthForm.module.scss';

const AuthForm: FunctionComponent = ({children,isLoading}) => {
 
  return (
    <Spin spinning={isLoading}>
      <div className={styles.authform}>
        <div className={styles.authformContent}>
         {children}
        </div>
      </div>
    </Spin>
  );
};

export default AuthForm;
