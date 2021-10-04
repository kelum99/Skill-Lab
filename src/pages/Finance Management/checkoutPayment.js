import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Spin,
  DatePicker,
  Checkbox,
  message,Space,Row
} from "antd";
import "./stylesFinance.css";
import "antd/dist/antd.css";
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";
import {Link} from "react-router-dom";

function CheckOut() {
    const {user} = useUser();
    const { Option } = Select;
    const [cardList, setCardList] = useState([]);
    const [loading, setLoading] = useState(true);
    const { request } = useRequest();
    
    const fetchWallet = async () => {
        setLoading(true);
        try {
          const result = await request.get(`finance/wallet/findAll/${user._id}`);
          if (result.status === 200) {
            console.log(result.data);
            setCardList(result.data);
          }
          console.log(" wallet list get ", result);
          setLoading(false);
        } catch (e) {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        if(user && user._id){
         fetchWallet(); 
        }
       }, [user]);
     
    return(

        <Form
        name="checkout-form"
        layout="vertical"
        >
            <Form.Item
              name={["pName"]}
              label="Product Name"
              rules={[{ required: true }]}
            >
              <Input autocomplete="off" defaultValue="Product" disabled/>
            </Form.Item>
            <Form.Item
              name={["pPrice"]}
              label="Price"
              rules={[{ required: true }]}
            >
              <InputNumber autocomplete="off" defaultValue="150$" disabled/>
            </Form.Item>

              <Form.Item
              name={["cardName"]}
              label="Select Card"
              rules={[{ required: true }]}
            >
              <Select placeholder="Select Your Bank">
                {cardList.map(card => (
                    <Option key={card._id} value={card.nickName}>{card.nickName}</Option>
                ))}
              </Select>

            </Form.Item>

                <Button type="primary" htmlType="submit" className="updateBtn" >
                  Pay Now
                </Button>

        </Form>
    );

}
export default CheckOut;