import React,{useState,useEffect} from "react";
import './stylesManagement.css'
import { Table, Button,Input,Popconfirm, message } from 'antd';
import { DeleteOutlined,AudioOutlined} from '@ant-design/icons';
import useRequest from "../../services/RequestContext";

function StdManagement() {

  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {request} = useRequest();


 function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

const fetchAuthenticationStudent = async () => {
  setLoading(true);

  try {
    const result = await request.get("AuthenticationRoute/StudentSignup");
    if (result.status === 200) {
      setData(result.data);
    }
    console.log(" std list get ", result);
    setLoading(false);
  } catch (e) {
    setLoading(false);
  }
};

useEffect(() => {
  fetchAuthenticationStudent();
}, []);


const onDelete = async value =>{
  try{
   
    const result = await request.delete(`AuthenticationRoute/StudentSignup/${value._id}`);
    // if(result.status === 200){
    //   await fetchAuthenticationStudent();
    //   setData(undefined);
    // }
    console.log("api call data deleted" , result);
    window.location.reload(true);
  }catch(e){
    console.log("error",e);
  }
};




//table
const columns = [
   
    {
      title: <b>First Name</b>,
      dataIndex: 'name',
      key:'name',
    },
    {
      title: <b>Last Name</b>,
      dataIndex: 'name1',
      key:'name1',
    },
    {
      title: <b>Birthday</b>,
      dataIndex: 'birthday',
      key:'birthday',
    },
    {
      title: <b>Gender</b>,
      dataIndex: 'gender',
      key:'gender',
    },
    {
      title: <b>NIC</b>,
      dataIndex: 'nic',
      key:'nic',
    },
    {
      title: <b>Email</b>,
      dataIndex: 'email',
      key:'email',
    },
    {
      title: <b>Mobile No.</b>,
      dataIndex: 'number',
      key:'number',
    },
   
    {
      title: <b>Action</b>,
      dataIndex: 'action',
      key:'action',
      render:(text, record,index)=>(
        <React.Fragment key={index}>
            
            <Popconfirm placement="right"  title="Are you sure to delete this task?"
                  onConfirm={()=>onDelete(record)}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No" >
                   <Button type="primary"icon={<DeleteOutlined />} className="dlt" />
          </Popconfirm>
          </React.Fragment>
       
      )
    },
      
  ];

  // const data = [
  //   {
  //     key: '1',
  //     nic: 'NIC1',
  //     name: 'Name1',
  //     email: 'Email1',
  //     number:'Mobile number1',
  //     dob:'DOB1',
  //     action:<><Popconfirm
  //                 title="Are you sure to delete this task?"
  //                 onConfirm={confirm}
  //                 onCancel={cancel}
  //                 okText="Yes"
  //                 cancelText="No"
  //               >
  //               <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
  //               </Popconfirm></>
  //   },
  //   {
  //       key: '2',
  //       nic: 'NIC2',
  //       name: 'Name2',
  //       email: 'Email2',
  //       number:'Mobile number2',
  //       dob:'DOB2',
  //       action:<><Popconfirm
  //                 title="Are you sure to delete this task?"
  //                 onConfirm={confirm}
  //                 onCancel={cancel}
  //                 okText="Yes"
  //                 cancelText="No"
  //               >
  //               <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
  //               </Popconfirm></>
  //   },
  //   {
  //       key: '3',
  //       nic: 'NIC3',
  //       name: 'Name3',
  //       email: 'Email3',
  //       number:'Mobile number3',
  //       dob:'DOB3',
  //       action:<><Popconfirm
  //                 title=" Are you sure to delete this task?"
  //                 onConfirm={confirm}
  //                 onCancel={cancel}
  //                 okText="Yes"
  //                 cancelText="No"
  //               >
  //               <Button type="primary"icon={<DeleteOutlined />} className="dlt"/>
  //               </Popconfirm></>
  //   },
  // ];

  //search box
  const { Search } = Input;
  const onSearch = value => console.log(value);
  (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

return (
        <div className="Au-manage">
              <Search placeholder="Search Student" onSearch={onSearch} enterButton className="searchbar1" />

            <br /><br /><h1>Authentication Administrator</h1>
            <h2>Student Management</h2>
           
        
            <Table columns={columns} dataSource={data} size="middle" pagination={false} className="tbl" />
         
        </div>
    );
}

export default StdManagement;