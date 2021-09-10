import React from "react";
import './stylesFeedback.css'
import 'antd/dist/antd.css';
import { Table, Input } from 'antd';



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
      courseName:'HTML/CSS',
      stId:'2099',
      stName:'Nemanthi Edirisooriya',
      Comment:'comment',
    },
    
    {
        key: '2',
        courseName:'course 1',
        stId:'2069',
        stName:'Wasundara Herath',
        Comment:'comment',
    },

    {
        key: '3',
        courseName:'course 11',
        stId:'2099',
        stName:'Kalana Damsara',
        Comment:'comment',
    },

    {
        key: '4',
        courseName:'course 4',
        stId:'1839',
        stName:'Oshadi Samarakoon',
        Comment:'comment',
    },

    {
        key: '5',
        courseName:'course 6',
        stId:'2001',
        stName:'Hasitha Hewawithana',
        Comment:'comment',
      
    },

    {
        key: '6',
        courseName:'course 5',
        stId:'2011',
        stName:'Terani Themindi',
        Comment:'comment',
    },

    {
        key: '7',
        courseName:'course 1',
        stId:'2099',
        stName:'Nemanthi Edirisooriya',
        Comment:'comment',
    },

    {
        key: '8',
        courseName:'course 1',
        stId:'2099',
        stName:'Nemanthi Edirisooriya',
        Comment:'comment',
    },

    ];

    //search box
    const { Search } = Input;
    const onSearch = value => console.log(value);
    
  
    
    return( 
        <div className="reviewList">
          
        
        <Search placeholder="Search Course " onSearch={onSearch} enterButton className="searchbar" />
    
        <Table columns={columns} dataSource={data} size="middle" pagination={false} className="reviewTable" />
    
    </div>
    );

 
};

export default reviewList;