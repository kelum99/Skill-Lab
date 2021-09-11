import React from "react";
import './stylesManagement.css'
import { Table, Button,Input,Popconfirm, message } from 'antd';
import { DeleteOutlined,AudioOutlined} from '@ant-design/icons';

function stdManagement() {


 function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

//table
const columns = [
   
    {
      title: <b>NIC</b>,
      dataIndex: 'nic',
    },
    {
      title: <b>Full Name</b>,
      dataIndex: 'name',
    },
    {
      title: <b>Email</b>,
      dataIndex: 'email',
    },
    {
      title: <b>Mobile Number</b>,
      dataIndex: 'number',
    },
    {
      title: <b>Date of Birth</b>,
      dataIndex: 'dob',
    },
    {
      title: <b>Action</b>,
      dataIndex: 'action',
    },
      
  ];
  const data = [
    {
      key: '1',
      nic: 'NIC1',
      name: 'Name1',
      email: 'Email1',
      number:'Mobile number1',
      dob:'DOB1',
      action:<><Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
                </Popconfirm></>
    },
    {
        key: '2',
        nic: 'NIC2',
        name: 'Name2',
        email: 'Email2',
        number:'Mobile number2',
        dob:'DOB2',
        action:<><Popconfirm
                  title="Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
                </Popconfirm></>
    },
    {
        key: '3',
        nic: 'NIC3',
        name: 'Name3',
        email: 'Email3',
        number:'Mobile number3',
        dob:'DOB3',
        action:<><Popconfirm
                  title=" Are you sure to delete this task?"
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
                </Popconfirm></>
    },
  ];

  //search box
  const { Search } = Input;
  const onSearch = value => console.log(value);
  (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

return (
        <div className="Au-manage">
              <Search placeholder="Search Student" onSearch={onSearch} enterButton className="searchbar1" />

            <br /><br /><h1>Authentication Administrator</h1>
            <h2>Student Management</h2>
           
        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="tbl" />
         
        </div>
    );
}

export default stdManagement;