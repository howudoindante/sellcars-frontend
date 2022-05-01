import React, { useEffect } from 'react';
import { Form, Row, Col,  Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAdvertsByQuery } from '../../api/Adverts';
import { setFilter } from '../../state/actions/filter';
import FilterFields from './Fields/Fields';


const FilterForm = () => {
  const [form] = Form.useForm();
  const filterDefaultValue = {
    title:"",
    price:[0,Infinity]
  };
  const dispatch = useDispatch();
  const onFinish = (query: any) => {
    const advertsQuery = {
      title: query.title,
      fromPrice: query.price[0],
      toPrice: query.price[1],
    };
    dispatch(setFilter(advertsQuery));
  };

  useEffect(()=>{
    form.setFieldsValue(filterDefaultValue);
  },[])

  const clearFilter = () =>{
      form.setFieldsValue(filterDefaultValue);
      dispatch(getAdvertsByQuery());
  }

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
            onClick={clearFilter}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FilterForm;
