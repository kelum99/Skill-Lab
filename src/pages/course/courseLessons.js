import React,{useState,useEffect} from "react";
import './courseStyles.css';
import 'antd/dist/antd.css';
import { Table, Button} from 'antd';
import { RightOutlined } from '@ant-design/icons';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';




function Lessons() {

  const history = useHistory();

  // retrive
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchcourses = async () => {
    setLoading(true);
    try {
      const result = await request.get("course/lessonscreated/findAll"); 
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
  


//table
const columns = [


//index

{
  title: '#',
  dataIndex: 'index',
  key:'index',
  render:(text,record,index) => index +1,
  },


/*
    {
      title: 'Course Name',
      dataIndex: 'cname',
      key:'cname'
    },
    */
    {
      title: 'Lesson Name',
      dataIndex: 'lessoname',
      key: 'lessoname',
    },
    
    {
      title: '', 
      dataIndex: 'action',
      key:'action',
      render: () =>(
        <span>
        <>
        <Button type="primary "icon={<RightOutlined />} onClick={() => history.push('./viewACourseLesson')} className="edit-dlt-table"/>
       
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





  


    return (
        
        <div className="allQuestions">
            <h1 className="course_h1" >Course Content </h1>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable" />
            
        </div>
    
    );
}

export default Lessons;













