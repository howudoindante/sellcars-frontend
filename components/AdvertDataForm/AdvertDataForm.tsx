import { Button, Col, Form, Input, Row } from 'antd';
import { Advert } from '../../types/Advert';
interface IAdvertDataProps {
  onFinish: (data) => void;
  initialData?: Advert
  buttonText:string;
}
const AdvertDataForm: React.FC<IAdvertDataProps> = ({ onFinish,initialData = {title:"",description:"",price:"",image:""},buttonText }) => {
  return (
    <Form onFinish={onFinish} layout='vertical'>
      <Form.Item name={`title`} label={`Название автомобиля`}>
        <Input placeholder='Введите название автомобиля' defaultValue={initialData.title}/>
      </Form.Item>
      <Form.Item name={`price`} label={`Цена`}>
        <Input placeholder='Введите цену автомобиля' defaultValue={initialData.price}/>
      </Form.Item>
      <Form.Item name={`description`} label={`Описание`} >
        <Input placeholder='Описание' defaultValue={initialData.description}/>
      </Form.Item>
      <Form.Item name={`image`} label={`Картинка (url)`}>
        <Input placeholder='Описание' defaultValue={initialData.image}/>
      </Form.Item>
      <Button htmlType='submit'>{buttonText}</Button>
    </Form>
  );
};
export default AdvertDataForm;
