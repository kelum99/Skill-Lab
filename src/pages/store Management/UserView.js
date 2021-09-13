import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button } from "antd";
import "antd/dist/antd.css";
import "./styleStore.css";
import UseRequest from "../../services/RequestContext";

function UserView() {
  const { Option } = Select;

  const [data, setData] = useState();
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState([]);

  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const result = await request.get("store/productDetails");
      if (result.status === 200) {
        setItemList(result.data);
      }
      console.log(" Product Deatils list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const { request } = UseRequest();

  const onSelect = value => {
    if (value && value._id) {
      const item = itemList.find(val => val._id === value._id);
      console.log("Item Selected ", item);
      setData({ ...item });
    }
  };

  return (
    <>
    <h1> Store </h1>
      <div className="select-item-filter">

        <Form.Item name={["category"]} label="Category">
          <Select placeholder="Category" >
            <Option value="ebook">e-Book</Option>
            <Option value="web templates"> Web Templates</Option>
            <Option value="sample Projects"> Sample Projects</Option>
            <Option value="web templates"> Web Templates</Option>
          </Select>
        </Form.Item>
      </div>
    <div className="item-container">
      {itemList.map(item => (
        <div className="one-item" key={item._Id} onClick={() => onSelect(item)}>
          <h2>{item.productName}</h2>
          <h4>{item.category}</h4>
          <h4>Price: {item.price}$</h4>
        </div>
      ))}
      </div>
    </>
  );
}

export default UserView;
