import React from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table, Button,Input } from 'antd';
import {DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import allList from '../../image/allList.png';

function allQuestionList() {

//table
const columns = [
    {
        title: '#',
        dataIndex: 'index',
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
        title: 'Course Name',
        dataIndex: 'courseName',
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
    },
    {
        title: 'Question',
        dataIndex: 'description',
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
       studentName: 'name1',
       email: 'email1',
       courseName:'course1',
       topic: 'topic1',
       description:'Question1',
       action:<><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></>
    },
    {
        key: '2',
        index:'2',
        studentName: 'name2',
        email: 'email2',
        courseName:'course2',
        topic: 'topic2',
        description:'Question2',
        action:<><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></>
      },
      {
        key: '3',
        index:'3',
        studentName: 'name3',
        email: 'email3',
        courseName:'course3',
        topic: 'topic3',
        description:'Question3',
        action:<><Button type="primary"icon={<DeleteOutlined/>}  className="edit-dlt"/></>
      },
  ];

  //search box
  const { Search } = Input;
  const onSearch = value => console.log(value);
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '185B8C',
      }}
    />
  );

    return (
        
        <div className="allQuestions">
            <Search placeholder="Search Question" onSearch={onSearch} enterButton className="searchbar" />
            
            <br /><br /><center><h1 className="Heading">All Questions List</h1></center>

            <div> <center><img className="questionimg" src={allList} alt="allQList" height ={200} width ={250}/></center> </div>
            
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable2" />
            
        </div>
    
    );
}

export default allQuestionList;