import React from "react";
import './stylesFeedback.css'
import 'antd/dist/antd.css';
import { Table, Input, Space } from 'antd';
import { AudioOutlined} from '@ant-design/icons';



function reviewList(){

 //table
const columns = [
 
    
    {
      title: 'Course Name',
      dataIndex: 'courseName',
    },
    {
      title: 'Student Id',
      dataIndex: 'stId',
    },
  
    {
      title: 'Student Name',
      dataIndex: 'stName',
    },

    {
        title: 'Comment',
        dataIndex: 'comment',
      },
  ];

  const data = [
    {
      key: '1',
      courseName:'course name',
      stId:'0000',
      stName:'student name',
      comment:'comment',
    },
    
    {
        key: '2',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    {
        key: '3',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    {
        key: '4',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    {
        key: '5',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
      
    },

    {
        key: '6',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    {
        key: '7',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    {
        key: '8',
        courseName:'course name',
        stId:'0000',
        stName:'student name',
        comment:'comment',
    },

    ];

    //search box
    const { Search } = Input;
    const onSearch = value => console.log(value);
    const suffix = (
      <AudioOutlined
        style={{
          fontSize: 18,
          color: '#49c1d1',
        }}
      />
    );
  
    
    return( 
        <div className="reviewList">
        

        <div>
          <br/><br/> 
          <h1><center>My Review List</center></h1>
          
        </div>
          
        <div>
        <Search placeholder="Search Course " onSearch={onSearch} enterButton className="searchbar" />
        <Table columns={columns} dataSource={data} size="middle" pagination={false} className="reviewTable" />
        </div>
    </div>
    );

 
};

export default reviewList;