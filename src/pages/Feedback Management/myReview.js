import React,{useState,useEffect} from "react";
import './stylesFeedback.css'
import { Table, Button,Input, Space,Popconfirm,message } from 'antd';
import { EditOutlined ,DeleteOutlined} from '@ant-design/icons';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';

function MyReview(){
      //alert msg
      const text = 'Are you sure you want to delete ?';
      function confirm(){
        message.info('Successfully Deleted !!');
      }
  // retrive

  const history = useHistory();

  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchReview = async () => {
    setLoading(true);
    try {
      const result = await request.get("feedback/review/findAll/IT20190552");
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" review list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReview();
  }, []);
    //table
const columns = [
    
    
    {
      title: '#',
      dataIndex: 'index',
      key:'index',
      render:(text,record,index) =>index+1,
    },
    {
      title: 'Course',
      dataIndex: 'course',
      key:'course'
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key:'comment'
    },
    {
      title: 'No of Stars',
      dataIndex: 'rate',
      key:'rate'
    },


    {

      title: 'Action',
      dataIndex: 'action',
      key:'action',

      render: () =>(

        <span>

        <><Button type="primary"icon={<EditOutlined /> } onClick={() => history.push('./editR')} className="edit-dlt"/>

        <Popconfirm placement="right" title={text} onConfirm={confirm} okText="Yes" cancelText="No">

          <Button type="primary"icon={<DeleteOutlined/>}  className="edit-dlt"/>

        </Popconfirm></>

        </span>

      ),

    },


  
      // {
      //   title: 'Option',
      //   dataIndex: 'option',
      //   key:'option'
      // },
  ];


  // const data = [
  //   {
  //     key: '1',
  //     course: 'Course 1',
  //     comment: 'Comment',
  //     option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
  //   },
  //   {
  //       key: '2',
  //       course: 'Course 2',
  //       comment: 'Comment',
  //       option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
  //       },
  //     {
  //       key: '3',
        
  //       course: 'Course 3',
  //       comment: 'Comment',
  //       option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
     
  //     },

  //     {
  //       key: '4',
        
  //       course: 'Course 4',
  //       comment: 'Comment',
  //       option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
    
  //     },

  //     {
  //       key: '5',
        
  //       course: 'Course 5',
  //       comment: 'Comment',
  //       option:<Space direction='horizontal'><Button type="primary"icon={<EditOutlined />} className="edit-dlt"/><Button type="primary"icon={<DeleteOutlined />} className="edit-dlt"/></Space>
    
  //     },
  // ];
 

  

  return (
    <div className="myReview">
          
        
        <br/><br/>

        <div><h1><center>Edit Review</center></h1></div>
        <Table columns={columns} dataSource={data} size="middle" pagination={false} className="rTable" />
    
    </div>
);
}

export default MyReview;

