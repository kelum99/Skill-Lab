import React from "react";
import 'antd/dist/antd.css';
import { Rate,Progress,Space,Input,Form,Button,Comment,  List} from  'antd';
import avatar  from '../../image/avatar.jpg'
import './stylesFeedback.css'


function review() {

    const layout = {
        labelCol: {
          span: 16,
        },
        wrapperCol: {
          span: 20,
        },
      };

     

      const data = [
        {
          
          author: 'Han Solo',
          
          content: (
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes beautifully and
              efficiently.
            </p>
          ),
          rate: (
            <Rate disabled allowHalf defaultValue={2} />

            ),
        },

          
          
        {
            
            author: 'Han Solo',
            
            content: (
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
              </p>
            ),
            rate: (
              <Rate disabled allowHalf defaultValue={3} />
  
              ),
   
        },


        {
            
            author: 'Han Solo',
                
            content: (
                <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
                </p>
            ),
            rate: (
              <Rate disabled allowHalf defaultValue={5} />
  
              ),
       
        },

        {
            
            author: 'Han Solo',
                    
            content: (
                <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
                </p>
            ),
            
            rate: (
              <Rate disabled allowHalf defaultValue={5} />
  
              ),
        },

        {
            
            author: 'Han Solo',
                        
            content: (
                <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
                </p>
            ),
            rate: (
              <Rate disabled allowHalf defaultValue={3} />
  
              ),
               
        },

        {
            
            author: 'Han Solo',
                            
            content: (
                <p>
                    We supply a series of design principles, practical patterns and high quality design
                    resources (Sketch and Axure), to help people create their product prototypes beautifully and
                    efficiently.
                </p>
             ),
             rate: (
              <Rate disabled allowHalf defaultValue={4} />
  
              ),
                   
        }

      ]


    const { TextArea } = Input;


  
    
    return (

    <>
    <div className="main-container-Review">
    <div className= "review">

        <div>
            <br/>
            <h1>Reviews</h1>
            </div>

            <div> <Space direction="horizontal">
            <div class="cusRate"><left>
                <Rate style={{ fontSize: 25 }} disabled allowHalf defaultValue={3.5} />
                <h3>Customer Rating</h3>
            </left>
            </div>
            
            <>
        <div style={{ width: 800 }} >
        <Progress
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={99.9}
          />
        
        
        <Progress percent={70} status="5 Star" />
        <Progress percent={50} status="4 Star" />
        <Progress percent={70} status="3 Star" />
        <Progress percent={20} status="2 Star"/>
        <Progress percent={5} status="1 Star" />
        
        </div>
  </>,

  </Space>

  </div>   
       
        <br/><br/>
        
    
    <>

    <div className="ccomntform"> 
     
    <Space direction="horizontal">

    <Form.Item  shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:20}}>
      <div className='writeC'>
      <Comment >
      <TextArea  rows={4} placeholder="Write your review here...." size="large"  />
      </Comment>
      </div>
    </Form.Item>

    <Form.Item shouldUpdate wrapperCol={{ ...layout.wrapperCol, offset:20}}>

    <Rate style={{ fontSize: 30 }} allowHalf defaultValue={2.5} />
    <Button type="primary" htmlType="submit">
            Add Comment
    </Button>
    </Form.Item>
    </Space>
  
    </div>
    </>
    <> 
    <div>

    <List className="comntL"

    className="comment-list"
    item-Space="20px"
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <li>
        <Comment
          
          author={item.author}
          content={item.content}
          avatar={<img  src ={avatar} height={100} width={100}></img>}
          rate={ item.rate}
        
          
        />
      </li>
    )}
  />,
    </div>
    </>
        
        
      
    </div>
    
    </div>
    </>
  
);

};

export default review;
