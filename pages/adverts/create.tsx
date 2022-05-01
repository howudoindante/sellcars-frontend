import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import PageLayout from '../../components/PageLayout/PageLayout';
import { createAdvert} from '../../api/Adverts';
import AdvertDataForm from '../../components/AdvertDataForm/AdvertDataForm';
const Create: NextPage = () => {
  const router = useRouter();
  const onFinish = (data) =>{
    createAdvert(data);
  }
 
  useEffect(() => {
    if (!Cookies.get('utoken')) {
      router.push('/auth/login');
    }
  }, []);
  return (
    <PageLayout>
      <h1>Создание нового объявления</h1>
      <AdvertDataForm onFinish={onFinish} buttonText="Добавить"/>
    </PageLayout>
  );
};
export default Create;
