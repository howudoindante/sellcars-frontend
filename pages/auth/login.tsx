import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/AuthPage.module.scss';
import AuthForm from "../../hocs/formWithHandling"
const Login: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthForm actionType='login'/>
    </div>
  )
}

export default Login;
