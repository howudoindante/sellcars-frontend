import { Spin } from 'antd';
import { FunctionComponent } from 'react';
import styles from './AuthForm.module.scss';

const AuthForm: FunctionComponent = ({children,isLoading}) => {
 
  return (
    <Spin spinning={isLoading}>
      <div className={styles["auth-form"]}>
        <div className={styles["auth-form__content"]}>
         {children}
        </div>
      </div>
    </Spin>
  );
};

export default AuthForm;
