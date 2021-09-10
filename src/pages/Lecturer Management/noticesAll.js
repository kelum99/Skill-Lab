import React from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table, Button,message,Popconfirm } from 'antd';
import {DeleteOutlined,PlusCircleOutlined} from '@ant-design/icons';

function noticesAll() {
  //Alert mg
  const text = 'Are you sure you want to delete ?';

  function confirm() {
      message.info('Result Deleted Successfully !');
  }


//table
const columns = [
    {
        title: '#',
        dataIndex: 'index',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'Notice',
      dataIndex: 'notice',
    },
   
    {
        title: 'Action',
        dataIndex: 'action',
    },
  ];
  const data = [
    {
       key: '1',
       index:'1',
       date: 'Date1',
       notice: 'Notice1',
      
       action:<>
       <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
       <Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/>
       </Popconfirm></>
    },
    {
        key: '2',
        index:'2',
        date: 'Date2',
        notice: 'Notice2',
        
        action:<>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/>
        </Popconfirm></>
      },
      {
        key: '3',
        index:'3',
        date: 'Date3',
        notice: 'Notice3',
        
        action:<>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
        <Button type="primary"icon={<DeleteOutlined/>}  className="edit-dlt"/>
        </Popconfirm></>
      },
  ];

    return (
        
        <div className="allQuestions">
            
            <br /><br /><center><h2 className="Heading">All Notices</h2></center>

            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable3" />
            <div> <Button type="primary" icon={<PlusCircleOutlined />} className="btnAllN">Add Notice</Button></div>
        </div>
    
    );
}

export default noticesAll;