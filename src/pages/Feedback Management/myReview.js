import React from "react";
import './stylesFeedback.css'
import { Table, Button,Input, Space } from 'antd';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';

function myReview(){
    //table
const columns = [
    
    
    {
      title: 'Course',
      dataIndex: 'course',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
    },
  
      {
        title: 'Option',
        dataIndex: 'option',
      },
  ];


  const data = [
    {
      key: '1',
      course: 'Course 1',
      comment: 'Comment',
      option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
    },
    {
        key: '2',
        course: 'Course 2',
        comment: 'Comment',
        option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
        },
      {
        key: '3',
        
        course: 'Course 3',
        comment: 'Comment',
        option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
     
      },

      {
        key: '4',
        
        course: 'Course 4',
        comment: 'Comment',
        option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
    
      },

      {
        key: '5',
        
        course: 'Course 5',
        comment: 'Comment',
        option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
    
      },
  ];
  
  

  

  return (
    <div className="myReview">
          
        
        <br/><br/>

        <div><h1><left>Edit Review</left></h1></div>
        <Table columns={columns} dataSource={data} size="middle" pagination={false} className="rTable" />
    
    </div>
);
}

export default myReview;

