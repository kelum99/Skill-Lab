import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Space } from "antd";
import "antd/dist/antd.css";
import "./styleStore.css";
import UseRequest from "../../services/RequestContext";
import productImg from '../../Images/logo.png';
import {  Link } from "react-router-dom";

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
  //search box
 const { Search } = Input;
 const onSearch = (value) => {
   let result = [];
   result =itemList.filter((data) =>{
    if (value == ""){
      window.location.reload(true);
      return data;
    }else{
      return data.productName.toLowerCase().search(value) != -1 
    }
   });
   setItemList(result);

 }

  return (
    <>
        <div class="st">
    <h1> Store </h1>
    </div>

    <div>
      <Space direction="vertical" >
        <Search
          className="item-search"
          placeholder="Search your item here "
          allowClear
          enterButton="Search SkillLab item"
          size="large"
          onSearch={onSearch}
        />

      </Space>
    </div>

      {/* <div className="select-item-filter">
          <Select placeholder="Category">
            <Option value="ebook">e-Book</Option>
            <Option value="web templates"> Web Templates</Option>
            <Option value="sample Projects"> Sample Projects</Option>
            <Option value="web templates"> Web Templates</Option>
          </Select>
    
      </div> */}
    <div className="item-container">
   
    
      {itemList.map(item => (
        <div className="one-item" key={item._Id} onClick={() => onSelect(item)}>
          {/* <h2><Link to={`/AddCart/${item._id}`} >{item.productName} </Link> </h2> */}
          <h2>{item.productName} </h2>
          <h4>{item.category}</h4>
          <h4>Price: {item.price}$</h4>
          <img src={productImg} className="product-img"/>
          <Link to="#" >
          <Button type="primary" id="addCartBtn">
            Add to Cart
            </Button></Link>
        </div>
      )
      )}
      
      </div>
    </>
  );
}

export default UserView;
