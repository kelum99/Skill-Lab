import React from 'react';
import { Form, Input, Select, Button, Table } from 'antd';
import 'antd/dist/antd.css';
import './styleStore.css'

function Cart() {

    const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 14,
        },
      };

    const columns = [
        {
            title: 'Product Details',
            dataIndex: 'productDetails',
            key: 'productDetails',
        },

        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },

        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },


    ];


    const dataSource = [
        {
            key: '1',
            productDetails: 'Title,Lecturer',
            Price: 'Price',

        },
        {
            key: '2',
            productDetails: 'Title,Lecturer',
            Price: 'Price',
        },


    ];

    const { Option } = Select;



    return (
        <div className="MainContaner-display">

            <Table columns={columns} dataSource={dataSource} />



            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 6 }}>
                <Button type="primary" htmlType="store">
                    Back to Store
                </Button>

                <Button type="primary" htmlType="check">
                    Checkout
                </Button>
            </Form.Item>

        </div>
    );


}
export default Cart;