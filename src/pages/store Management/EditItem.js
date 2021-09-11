import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css';
import './styleStore.css'


function EditItem(){

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 14,
        },
      };

      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

      const onFinish = (values) => {
        console.log(values);
      };

      const { Option } = Select;

    return(
        
        <div className = "MainContainer-Item">

        <div className="form-item">

            <h1>Edit Product Details</h1>

        <Form  name="AddItems-Form" onFinish={onFinish} validateMessages={validateMessages} layout="vertical">
      <Form.Item
        name={['productId']}
        label="Product ID"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['productName']}
        label="Product Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['price']}
        label="Price"
        rules={[
          {
            required: true

          },
        ]}
      >
        <Input/>
      </Form.Item>


      <Form.Item name={['description']} label="Description">
        <Input.TextArea />
      </Form.Item>

      <Form.Item name={['category']} label="Category">
      <Select>
      <Option value="ebook">e-Book</Option>
      <Option value="web templates"> Web Templates</Option>
      </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          UPDATE
        </Button>
      </Form.Item>
    </Form>

        </div>
        </div>
        
    );
}

export default EditItem;