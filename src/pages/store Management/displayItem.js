import React from 'react';
import { Table, Button, Menu, Dropdown, Space } from 'antd';
import 'antd/dist/antd.css';

function DisplayItem(){

    const menu = (
        <Menu onClick={DisplayItem}>
          
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
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
              </Space>
            ),
          },
      ];


      const dataSource = [
        {
          key: '1',
          productID: 'Item1',
          productName: 'Name',
          category: 'Category1',
          price: 'Price',
        },
        {
          key: '2',
          productID: 'Item2',
          productName: 'Name',
          category: 'Category2',
          price: 'Price',
        },

        {
            key: '3',
            productID: 'Item3',
            productName: 'Name',
            category: 'Category3',
            price: 'Price',
          },

          {
            key: '4',
            productID: 'Item4',
            productName: 'Name',
            category: 'Category4',
            price: 'Price',
          },
      ];
      
return(

    <div className = "MainContaner-Diaplay">

    
  <div class = "button">
   <Button>Add Product</Button>
    
  </div>
  

    

<Table columns={columns} dataSource={dataSource} />
    
    </div>
    
); 
}

 export default DisplayItem;