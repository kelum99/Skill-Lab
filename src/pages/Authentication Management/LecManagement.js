import React from "react";
import './stylesManagement.css'
import { Table, Button,Input } from 'antd';
import { DeleteOutlined,AudioOutlined} from '@ant-design/icons';

function stdManagement() {

//table
const columns = [
   
    {
      title: 'NIC',
      dataIndex: 'nic',
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
        title: 'Mobile Number',
        dataIndex: 'number',
      },
      {
        title: 'Qualifications',
        dataIndex: 'quali',
      },
      {
        title: 'Action',
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
      quali:'Qualification1',
      action:<><Button type="primary"icon={<DeleteOutlined />} className="dlt"/></>
    },
    {
        key: '2',
        nic: 'NIC2',
        name: 'Name2',
        email: 'Email2',
        number:'Mobile number2',
        quali:'Qualification1',
        action:<><Button type="primary"icon={<DeleteOutlined />} className="dlt"/></>
      },
      {
        key: '3',
        nic: 'NIC3',
        name: 'Name3',
        email: 'Email3',
        number:'Mobile number3',
        quali:'Qualification1',
        action:<><Button type="primary"icon={<DeleteOutlined/>}  className="dlt"/></>
      },
  ];

  //search box
  const { Search } = Input;
  const onSearch = value => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

    return (
        <div className="manage">
              <Search placeholder="Search Lecturer" onSearch={onSearch} enterButton className="searchbar" />
            <br /><br /><center><h1 className="Heading1">Authentication Administrator</h1></center>
            <center><h2 className="Heading2">Lecturer Management</h2></center>
           
        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="tbl" />
         
      
        
        </div>
    );
}

export default stdManagement;