import React,{useState} from "react";
import axios from "axios";
import im from '../../image/im.jpeg';
import {
    Input,
    Select,
    
    Space,
    handleChange,
    sights,
    form,
    Button,
    Form,
  
  } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

export default function JobApply(){

    const {Option} = Select;

    const layout = {
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 14
        }
      };
    
      //Form Vilidation 
      const validateMessages = {
        required: "${label} is required!",
    
        types: {
          number: "${label} is not a valid number!"
        }
      };
    
       //on submit - console log
      const onFinish = values => {
        console.log(values);
      };

      

    return(
<div class="">
  <div class="row">
    <div class="col">
    <div className="positionIMG">
    <h1 class="h2">Start your careere with us</h1>
<img src={im} className="applyimage" alt=""/>


</div>
    </div>
    <div class="col">
    <div className="formPosition">

    <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.Item name="area" label="Area" rules={[{ required: true, message: 'Missing area' }]}>
        <Select options={areas} onChange={handleChange} />
      </Form.Item>
      <Form.List name="sights">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
              <Space key={field.key} align="baseline">
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                  }
                >
                  {() => (
                    <Form.Item
                      {...field}
                      label="Sight"
                      name={[field.name, 'sight']}
                      fieldKey={[field.fieldKey, 'sight']}
                      rules={[{ required: true, message: 'Missing sight' }]}
                    >
                      <Select disabled={!form.getFieldValue('area')} style={{ width: 130 }}>
                        {(sights[form.getFieldValue('area')] || []).map(item => (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  )}
                </Form.Item>
                <Form.Item
                  {...field}
                  label="Price"
                  name={[field.name, 'price']}
                  fieldKey={[field.fieldKey, 'price']}
                  rules={[{ required: true, message: 'Missing price' }]}
                >
                  <Input />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}

            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add sights
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
   
  </div>
</div>
</div>

</div>
    )

}
