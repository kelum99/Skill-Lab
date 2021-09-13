import React,{useState,useEffect} from "react";
import './stylesLecturer.css';
import 'antd/dist/antd.css';
import { Table, Button,message,Popconfirm } from 'antd';
import {DeleteOutlined,PlusCircleOutlined} from '@ant-design/icons';
import useRequest from "../../services/RequestContext";
import { useHistory } from 'react-router-dom';

function NoticesAll() {

  //navigate to page 
  const history = useHistory();

  // retrive
  const[data,setData] = useState([]);
  const[loading,setLoading] = useState(true);
  const{request} = useRequest();

  const fetchNotice = async () => {
    setLoading(true);
    try {
      const result = await request.get("lecturer/notice/findAll");
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" notice list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotice();
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
      title: 'Date',
      dataIndex: 'date',
      key:'date'
    },
    {
      title: 'Notice',
      dataIndex: 'notice',
      key:'notice'
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

    return (
        
        <div className="allT">
            
            <h1 className="notice_h1">All Notices</h1>
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="allQTable3" />
            <div> <Button type="primary" icon={<PlusCircleOutlined />} className="btnAllN"onClick={() => history.push('./createN')}>Add Notice</Button></div>

        </div>
    
    );
}

export default NoticesAll;