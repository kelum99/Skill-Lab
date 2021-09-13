import React ,{useState,useEffect} from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table, Button,Input,message,Popconfirm } from 'antd';
import {DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import allList from '../../image/allList.png';
import useRequest from "../../services/RequestContext";

function AllQuestionList() {

  // retrive data
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const result = await request.get("lecturer/question/findAll");
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" question list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);



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
        key:'index',
        render:(text,record,index) => index +1,
    },
    {
      title: 'Student Name',
      dataIndex: 'studentName',
      key:'studentName'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key:'email'
    },
    {
        title: 'Course Name',
        dataIndex: 'courseName',
        key:'courseName'
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key:'topic'
    },
    {
        title: 'Question',
        dataIndex: 'question',
        key:'question'
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key:'action',
      render: () =>(
        <span>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button type="primary"icon={<DeleteOutlined />} className="edit-dlt-table"/>
        </Popconfirm>
        </span>
      ),
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

        <div className="allT">
            <Search placeholder="Search Question" onSearch={onSearch} enterButton className="searchQ" />
            <h1 className="question_h1">All Questions List</h1>
            <center><img className="questionimg" src={allList} alt="allQList" height ={200} width ={250}/></center>
           <div> <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable2" /> </div> 
        </div>
      
    );
}

export default AllQuestionList;