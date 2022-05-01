import { Col, Form, Input, Row, Slider } from "antd";

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
          />
        </Form.Item>
      </Col>
    </Row>
  );
};
export default FilterFields;
