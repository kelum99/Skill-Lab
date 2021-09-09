import React from "react";
import { Form, Input, Button, Select, Checkbox} from "antd";
import './stylesFinance.css';
import 'antd/dist/antd.css'

function Withdraw() {

  const { Option } = Select;
  
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

  return (
    <>
    <div className="main-container-payment">

    <div className="form">

        <h1>Withdraw</h1>

{/* Form start */}
      <Form
          name="withdraw-form"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
      > 
            <Form.Item
                name= {["name"]}
                label= "AccountHolder's Name"
                rules= {[{ required: true}]}
            >
                 <Input autocomplete="off"/>
            </Form.Item>

            <Form.Item
                name={["accountNumber"]}
                label="Account Number"
                rules={[{ required: true}]}
                
            >
                <Input maxLength={10}  autocomplete="off"/>
            </Form.Item>

            <Form.Item
                name={["bankName"]}
                label="Bank Name"
                rules={[{ required: true}]}
            >
            
                <Select 
                  placeholder="Select Your Bank">
                    <Option value="Bank of Ceylone">Bank of Ceylone</Option>
                    <Option value="Peoples Bank">Peoples Bank</Option>
                    <Option value="Sampath Bank">Sampath Bank</Option>
                    <Option value="Commercial Bank">Commercial Bank</Option>
                </Select>
            </Form.Item>

            <Form.Item
                name= {["branch"]}
                label= "Branch"
                rules= {[{ required: true}]}
            >
                 <Input autocomplete="off"/>
            </Form.Item>
            
            <Form.Item
                name="save"
                valuePropName="checked" 
            >
                  <Checkbox>Save my bank details</Checkbox>
            </Form.Item>

            <Form.Item shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:10 }}>
            <Button type="primary" htmlType="submit">
               Withdraw
            </Button>
            </Form.Item>

      </Form>
      {/* Form end */}
    </div>
    </div>
    </>
  );
}

export default Withdraw;
