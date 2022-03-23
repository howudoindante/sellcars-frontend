import { Alert } from "antd";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import styles from './Alert.module.scss';

const AlertMessage = (props) => {
    const [isAlertShow,setAlertShow] = useState(true);
    const handleClose = () =>{
      setAlertShow(false);
    }
    let classnames = classNames(styles.alertWrapper, { [styles.isHideAlert]: !isAlertShow });
    useEffect(() => {
        let timeout = null;
        if (props.message) {
          timeout = setTimeout(()=>{
            setAlertShow(false);
          },5000);
        }
        return () => {
            if(timeout){
                clearTimeout(timeout);
            }
        };
      }, [props.message]);
    
    return (
           <div className={classnames} >
                <Alert message={props.message} type="error" closable afterClose={handleClose} />
           </div>
    )
}
export default AlertMessage;