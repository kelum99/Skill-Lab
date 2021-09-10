import React, { Component } from "react";

import { Table, Button,Input } from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined} from '@ant-design/icons';

function UpdateJob() {

//table
const columns = [
    {
        title: '#',
        dataIndex: 'index',
      },
    {
      title: 'Job ID',
      dataIndex: 'jobID',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
        title: 'Description',
        dataIndex: 'description',
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

export default UpdateJob;