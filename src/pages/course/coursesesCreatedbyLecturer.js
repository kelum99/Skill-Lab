import React,{useState,useEffect} from "react";
import './courseStyles.css';
import 'antd/dist/antd.css';
import { Table, Button,Input,message,Popconfirm} from 'antd';
import { EditOutlined ,DeleteOutlined,AudioOutlined,PlusCircleOutlined} from '@ant-design/icons';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';


function CreatedCourses() {

  const history = useHistory();

  // retrive
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchcourses = async () => {
    setLoading(true);
    try {
      const result = await request.get("course/coursecreate/findAll");
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
    fetchcourses();
  }, []);
  
  //Alert mg
  const text = 'Are you sure you want to delete ?';

  function confirm() {
      message.info('Result Deleted Successfully !');
  }


//table
const columns = [
    // {
    //     title: '#',
    //     dataIndex: 'index',
    // },


//index

{
  title: '#',
  dataIndex: 'index',
  key:'index',
  render:(text,record,index) => index +1,
  },



    {
      title: 'Name',
      dataIndex: 'name',
      key:'name'
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
      title: 'Paid',
      dataIndex: 'true',
      key: 'true',
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
    },

    {
      title: 'Action', 
      dataIndex: 'action',
      key:'action',
      render: () =>(
        <span>
        <>
        <Button type="primary "icon={<EditOutlined />} onClick={() => history.push('./courseEdit')} className="edit-dlt-table"/>
        <Button type="primary "   icon={<PlusCircleOutlined />} onClick={() => history.push('./courseContentCreate')} className="edit-dlt-table"/>
        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <Button type="primary"  icon={<DeleteOutlined/>}  className="edit-dlt-table"/>
        </Popconfirm>
        </>
        </span>
      ),
    },

    // {
    //     title: 'Action',
    //     dataIndex: 'action',
    // },
  ];
  // const data = [
  //   {
  //      key: '1',
  //      index:'1',
  //      studentName: 'name1',
  //      email: 'email1',
  //      courseName:'course1',
  //      topic: 'topic1',
  //      description:'Question1',
  //      action:<><Button type="primary"icon={<EditOutlined />} className="edit-dlt-table"/>
  //      <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
  //      <Button type="primary"icon={<DeleteOutlined />} className="edit-dlt-table"/>
  //      </Popconfirm></>
  //   },
  //   {
  //       key: '2',
  //       index:'2',
  //       studentName: 'name2',
  //       email: 'email2',
  //       courseName:'course2',
  //       topic: 'topic2',
  //       description:'Question2',
  //       action:<><Button type="primary"icon={<EditOutlined />} className="edit-dlt-table"/>
  //       <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
  //       <Button type="primary"icon={<DeleteOutlined />} className="edit-dlt-table"/>
  //       </Popconfirm></>
  //     },
  //     {
  //       key: '3',
  //       index:'3',
  //       studentName: 'name3',
  //       email: 'email3',
  //       courseName:'course3',
  //       topic: 'topic3',
  //       description:'Question3',
  //       action:<><Button type="primary"icon={<EditOutlined />} className="edit-dlt-table"/>
  //       <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
  //       <Button type="primary"icon={<DeleteOutlined/>}  className="edit-dlt-table"/>
  //       </Popconfirm></>
  //     },
  // ];





  

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
        
        <div className="allQuestions">
            <Search placeholder="Search Question" onSearch={onSearch} enterButton className="searchQ" />
            <h1 className="course_h1" >All Courses</h1>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable" />
            
        </div>
    
    );
}

export default CreatedCourses;













