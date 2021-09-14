import React, { useEffect, useState } from "react";
import useRequest from "../../services/RequestContext";
import { Form, Input, Button,Spin, Row, Col, Select } from "antd";
import "./stylesFinance.css";
import "antd/dist/antd.css";
import moment from "moment";


function UpdateBank() {
  const [data, setData] = useState();
  const [bankList, setBankList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { request } = useRequest();
  const { Option } = Select;

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

  const fetchBank = async () => {
    setLoading(true);
    try {
      const result = await request.get(`finance/bank`);
      if (result.status === 200) {
        console.log(result.data);
        setBankList(result.data);
      }
      console.log(" bank list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBank();
  }, []);

  const onFinish = async (values) => {
    if(data !== undefined){
    try {
      const result = await request.put(`finance/bank/update/${data._id}`, values);
      console.log("api call bank updated", result);
    } catch (e) {
      console.log("update error ", e);
    }
  }else {
      console.log("Failed");
  }
 };

  const onDelete = async (value) => {
    try {
      const result = await request.delete(`finance/bank/${value._id}`);
      if(result.status === 200){
        await fetchBank();
        setData(undefined);
      }
      console.log("api call bank deleted", result);
    } catch (e) {
      console.log("post bank error ", e);
    }
  };
  const onCardSelect = val => {
    if (val && val._id) {
      const item = bankList.find(vl => vl._id === val._id);
      console.log("selected card ", item)
      setData({ ...item });
    }
  };

  return (
    <div className="main-container-updateBank">

      {bankList.length > 0 ? (
        <div className="savedCards">
          <label>My Saved Bank Details</label>
          {bankList.map(bank => (
            <div className="save-card"
              onClick={() => onCardSelect(bank)}
              key={bank._id}
              accountNumber = {bank.accountNumber}
              >
              <span>{bank.accountNumber}</span>
            </div> 
              
            
          ))}
        </div>
      ) : (
        <Spin />
      )}

      <div className={data !== undefined ? "updateForm" : "afterDelete"}>
        <h3>Edit Bank Details</h3>
        {data  && (
          <Form
            name="withdraw-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
            initialValues={data}
            key={data._id}
         >
            <Form.Item
              name={["name"]}
              label="AccountHolder's Name"
              rules={[{ required: true }]}
            >
              <Input autocomplete="off" />
            </Form.Item>

            <Form.Item
              name={["accountNumber"]}
              label="Account Number"
              rules={[{ required: true }]}
            >
              <Input maxLength={10} autocomplete="off" />
            </Form.Item>

            <Form.Item
              name={["bankName"]}
              label="Bank Name"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Your Bank">
                <Option value="Bank of Ceylone">Bank of Ceylone</Option>
                <Option value="Peoples Bank">Peoples Bank</Option>
                <Option value="Sampath Bank">Sampath Bank</Option>
                <Option value="Commercial Bank">Commercial Bank</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name={["branch"]}
              label="Branch"
              rules={[{ required: true }]}
            >
              <Input autocomplete="off" />
            </Form.Item>

           <Row className="update-wallet-btn-row"> 
           <Form.Item
              shouldUpdate
              wrapperCol={{ ...layout.wrapperCol, offset: 6 }}
              className="walletUpdate-btn"
            >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
             
                </Form.Item>
              <Button
              danger
              type="primary"
              onClick={() => onDelete(data)}
              >
               Delete
            </Button>
        </Row>
          </Form>
        
        )}

      </div>
    </div>
  );
}
export default UpdateBank;
