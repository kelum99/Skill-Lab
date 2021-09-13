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

function UpdateWallet() {

    const layout = {
        labelCol: {
          span: 8
        },
        wrapperCol: {
          span: 14
        }
      };

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
    <div className="main-container-updateWallet">
      <div className="savedCards">
        <div className="save-card">
            <h3>Card Number</h3>
        </div>
        <div className="save-card">
            <h3>Card Number2</h3>
        </div>
      </div>
      <div className="updateForm">
        <h3>Update Form</h3>
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

            <Form.Item
              shouldUpdate
              wrapperCol={{ ...layout.wrapperCol, offset: 6 }}
              className="walletUpdate-btn"
            >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
              <Button type="primary" htmlType="submit">
                Delete
              </Button>
            </Form.Item>
          </Form>
      </div>
    </div>
  );
}
export default UpdateWallet;
