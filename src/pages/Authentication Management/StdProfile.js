import React,{useState,useEffect} from "react";
import { Form, Input, Button,Popconfirm, message } from "antd";
import './stylesProfile.css'
import 'antd/dist/antd.css';
import useRequest from "../../services/RequestContext";
import useUser from "../../services/UserContext";


function Stdprofile() {

  const [data,setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {request} = useRequest();
  const {user} = useUser();


  
  const layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
    
  };
  
  function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

  
  const validateMessages = {
    required: "${label} is required!",

    types: {
      number: "${label} is not a valid number!"
    }
  };

 
  const onFinish = values => {
    console.log(values);
  };

  const [value] = React.useState(1);



  const fetchAuthenticationStudent = async () => {
    setLoading(true);
  
    try {
      const result = await request.get(`AuthenticationRoute/CommonSignup/${user._id}`);
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

return (

  <>
    <div className="main-container-profile">

    <div className="form-profile">

        <h3>Skill Lab</h3>
        <h1>User Profile</h1>

{data && (
<Form layout="vertical" name="StdProfile" onFinish={onFinish} validateMessages={validateMessages}
initialValues={data}
key={data._id}>

  <Form.Item
        name={['name']}
        label="First Name"
        >
        <Input />
  </Form.Item>

  <Form.Item
        name={['name1']}
        label="Last Name"
        >
        <Input />
  </Form.Item>
  
 <Form.Item
        name={[ 'email']}
        label="Email"
       >
        <Input />
  </Form.Item>

  <Form.Item
        name={[ 'number']}
        label="Mobile Number"
       >
        <Input />
  </Form.Item>

  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="primary" htmlType="submit" >
          Cancel
        </Button>
        <Popconfirm
              title="Are you sure to delete your profile?"
              onConfirm={confirm}
              onCancel={cancel}
              okText="Yes"
              cancelText="No"
          >
        <Button type="primary" htmlType="submit">
          Delete my Account
        </Button>
          </Popconfirm>
         
    </Form.Item>

</Form>
)}
    </div>
    </div>
    </>
  );
}

export default Stdprofile;
