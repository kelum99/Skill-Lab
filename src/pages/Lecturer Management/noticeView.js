import React from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import viewNote1 from '../../image/viewNote1.png';

function noticeView() {

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
  ];
  const data = [
    {
       key: '1',
       index:'1',
       date: 'Date1',
       notice: 'Notice1',
      
    },
    {
        key: '2',
        index:'2',
        date: 'Date2',
        notice: 'Notice2',
    },   
    {
        key: '3',
        index:'3',
        date: 'Date3',
        notice: 'Notice3',
    },
  ];

    return (
        
        <div className="allQuestions">
            
            <br /><br /><center><h1 className="Heading">News and Announcements</h1></center>
            <center><h2 className="subHeading">For the attention of all students!!</h2></center>
            <div> <center><img className="questionimg" src={viewNote1} height ={200} width ={250}/></center> </div>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable1" />
            
        </div>
        
    );
}

export default noticeView;