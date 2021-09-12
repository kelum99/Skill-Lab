import React, { Component } from "react";

import { Table, Button,Input } from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import './jobManagement.css';

function DeleteRequest() {

//table
const columns = [
    {
        title: 'Position',
        dataIndex: 'position',
      },
    {
      title: 'First Name',
      dataIndex: 'firstname',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
      {
        title: 'NIC',
        dataIndex: 'nic',
      },
      {
        title: 'Birth Date',
        dataIndex: 'bdate',
      },
      {
        title: 'Employyment Status',
        dataIndex: 'status',
      },
      {
        title: 'Action',
        dataIndex: 'action',
      },
  ];
  const data = [
    {
      
      jobID: '1',
      index:'1',
      jobID:'1',
      title: 'Instructor',
      salary: '25,000',
      description: 'Lectuer',
      action:<><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></>
    },
    {
      
      jobID: '1',
      index:'1',
      jobID:'1',
      title: 'Instructor',
      salary: '25,000',
      description: 'Lectuer',
      action:<><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></>
    },
    {
      
      jobID: '1',
      index:'1',
      jobID:'1',
      title: 'Instructor',
      salary: '25,000',
      description: 'Lectuer',
      action:<><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></>
    },
  ];


    return (
        <div className="myCourses">
            
            <br /><br /><center><h1 className="Heading">Job Vacancies</h1></center>
            

        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="crsTable" />
         
      
        
        </div>
    );
}

export default DeleteRequest;