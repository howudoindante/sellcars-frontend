import React, { useState } from 'react';
import { Form, Row, Col, Input, Button, Select, Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsByQuery } from '../../api_controllers/Adverts';
import { setFilter } from '../../state/actions/filter';

const { Option } = Select;
const FilterFields = ({ sliderMin, sliderMax }) => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item name={`title`} label={`Название автомобиля`}>
          <Input placeholder='Введите название автомобиля' />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={`price`} label={`Цена`}>
          <Slider
            min={sliderMin}
            max={sliderMax}
            marks={{ [sliderMin]: 'От', [sliderMax]: 'До' }}
            range
            defaultValue={[sliderMin, sliderMax]}
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
const FilterForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filterReducer);
  const onFinish = (query: any) => {
    const advertsQuery = {
      title: query.title,
      fromPrice: query.price[0],
      toPrice: query.price[1],
    };
    dispatch(setFilter(advertsQuery));
  };

  return (
    <Form
      form={form}
      name='advanced_search'
      className='ant-advanced-search-form'
      onFinish={onFinish}
      layout='vertical'
    >
      <FilterFields sliderMin={0} sliderMax={50_000_000} />
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => {
              dispatch(getAdvertsByQuery());
            }}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
