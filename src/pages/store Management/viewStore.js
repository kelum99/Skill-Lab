import React from 'react';
import { Table, Menu,  Space, Form, Select, Option } from 'antd';
import 'antd/dist/antd.css';

function viewStore(){

    const menu = (
        <Menu onClick={viewStore}>
          
        </Menu>
      );

    const columns = [
        {
          title: 'Product ID',
          dataIndex: 'productID',
          key: 'productID',
        },

        {
          title: 'Product Name',
          dataIndex: 'productName',
          key: 'productName',
        },

        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },

        {
            title: 'Number of Sells',
            dataIndex: 'numberofSells',
            key: 'numberofSells',
          },

          {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
          },

        
      ];


      const dataSource = [
        {
          key: '1',
          productID: 'productID1',
          productName: 'Name',
          category: 'Category1',
          numberofSells: 'xx',
          total:'xxxx.xx',
        },
        {
          key: '2',
          productID: 'productID2',
          productName: 'Name',
          category: 'Category2',
          numberofSells: 'xx',
          total:'xxxx.xx',
        },

        {
            key: '3',
            productID: 'productID3',
            productName: 'Name',
            category: 'Category3',
            numberofSells: 'xx',
            total:'xxxx.xx',
          },

          {
            productID: 'productID4',
            productName: 'Name',
            category: 'Category4',
            numberofSells: 'xx',
            total:'xxxx.xx',
          },
      ];

      const { Option } = Select;
      
return(

    <div className = "MainContaner-display">

<div class="month">
    <Form.Item name={['month']} >
      <Select placeholder="Month">
      <Option value="january">January</Option>
      <Option value="february"> February</Option>
      <Option value="march">March </Option>
      <Option value="april"> April</Option>
      <Option value="may"> May</Option>
      <Option value="june"> June</Option>
      <Option value="july"> July</Option>
      <Option value="august"> August</Option>
      </Select>
      </Form.Item>
   

    </div>

<Table columns={columns} dataSource={dataSource} />
    
    </div>
    
); 
}

 export default viewStore;