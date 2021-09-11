import React from "react";
import {
  Form,
  Input,
  InputNumber,
  Button,
  DatePicker,
  Checkbox,
} from "antd";
import "./stylesFinance.css";
import "antd/dist/antd.css";

function Payment() {
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
    const data = {...values, role:"Student"};
    values.role = "student"
    console.log("value",values);
    console.log("Role",data);
  };

  return (

      <div className="main-container-payment">
        <div className="form">
          <h1>Payment</h1>
          
          {/* Form start */}
          <Form
            name="payment-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
          >
            <Form.Item
              name={["name"]}
              label="Cardholder's Name"
              rules={[{ required: true }]}
            >
              <Input autocomplete="off" />
            </Form.Item>

            <Form.Item
              name={["cardNumber"]}
              label="Card Number"
              rules={[{ required: true }]}
            >
              <Input maxLength={16} />
            </Form.Item>

            <Form.Item
              name={["expireDate"]}
              label="Expire Month/Year"
              rules={[{ required: true }]}
            >
              <DatePicker picker="month" />
            </Form.Item>

            <Form.Item
              name={["cvv"]}
              label="CVV"
              rules={[
                {
                  type: "number",
                  required: true
                }
              ]}
            >
              <InputNumber maxLength={3} />
            </Form.Item>

            <Form.Item name="save" valuePropName="checked">
              <Checkbox style={{color:"#fff"}}>Save this card to wallet</Checkbox>
            </Form.Item>

            <Form.Item
              shouldUpdate
              wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
            >
              <Button type="primary" htmlType="submit">
                Pay
              </Button>
            </Form.Item>
          </Form>
          {/* Form end */}
        </div>
      </div>
  );
}

export default Payment;
