import React, {useEffect,useState} from 'react';
import { Table, Button, Menu, Dropdown, Space } from 'antd';
import 'antd/dist/antd.css';
import UseRequest from '../../services/RequestContext'; 
import { isMoment } from 'moment';

function DisplayItem(){

  const[data, setData] = useState([]);
  const[loading, setLoading] = useState([]);
  const[bankList, setBankList] = useState([]);
    
  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const result = await request.get("store/productDetails");
      if (result.status === 200) {
        setData(result.data);
      }
      console.log(" Product Deatils list get ", result);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const {request} = UseRequest();


    const columns = [
        {
          title: 'Product ID',
          dataIndex: 'productId',
          key: 'productId',
        },

        {
          title: 'Product Name',
          dataIndex: 'productName',
          key: 'productName',
        },

        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },

        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <Space size="middle">
                <a>Edit</a>
                <a>Delete</a>
              </Space>
            ),
          },
      ];

      



      
return(

    <div className = "MainContaner-Diaplay">

    
  <div class = "button">
   <Button>Add Product</Button>
    
  </div>
  

    

<Table columns={columns} dataSource={data} className="addItem-table" />
    
    </div>
    
); 
}

 export default DisplayItem;