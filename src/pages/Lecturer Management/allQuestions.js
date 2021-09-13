import React,{useState,useEffect} from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table, Button,Input,message,Popconfirm} from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined,PlusCircleOutlined} from '@ant-design/icons';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';

function AllQuestions() {

  //navigate to page
  const history = useHistory();

  // retrive
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
      key: 'email',
    },
    {
        title: 'Course Name',
        dataIndex: 'courseName',
        key: 'courseName',
    },
    {
      title: 'Topic',
      dataIndex: 'topic',
      key: 'topic',
    },
    {
        title: 'Question',
        dataIndex: 'question',
        key: 'question',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key:'action',
      render: () =>(
        <span>
        <><Button type="primary"icon={<EditOutlined />} onClick={() => history.push('./editQ')} className="edit-dlt-table"/>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button type="primary"icon={<DeleteOutlined/>}  className="edit-dlt-table"/>
        </Popconfirm></>
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
        color: '#1890ff',
      }}
    />
  );

  
    return (    
        <div className="allT">
            <Search placeholder="Search Question" onSearch={onSearch} enterButton className="searchQ" />
            <h1 className="question_h1">Frequently Asked Questions</h1>
            <h2 className="subHeading">Any Questions? Feel free to ask!!</h2>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable" />
            <Button type="primary" icon={<PlusCircleOutlined />} className="btnAll"onClick={() => history.push('./askQ')}>Ask New Question</Button>
        </div>
    );
}  

export default AllQuestions;