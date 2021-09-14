import React from "react";
import moment from "moment";
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
import useRequest from "../../services/RequestContext";

function Payment() {
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

const {request} = useRequest();

  const onFinish = async (values) => {
    values.expireDate = moment(values.expireDate).format("YYYY-MM");
    console.log("value",values);
      try{
          const result = await request.post('finance/wallet', values);
          console.log("api call wallet result ", result);
    } catch(e){
      console.log("post wallet error ",e);
    } 
  };

  return (

      <div className="main-container-payment">
        <div className="form">
          <h1>Add Card Details</h1>
        
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

            {/* <Form.Item name="save" valuePropName="checked">
              <Checkbox >Save this card to wallet</Checkbox>
            </Form.Item> */}

            <Form.Item
              shouldUpdate
              wrapperCol={{ ...layout.wrapperCol, offset: 10 }}
            >
              <Button type="primary" htmlType="submit">
                ADD
              </Button>
            </Form.Item>
          </Form>

        </div>
      </div>
  );
}

export default Payment;
