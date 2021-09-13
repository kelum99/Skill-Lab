import React from 'react';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import num1 from '../../image/num1.jpg';
import num2 from '../../image/num2.jpg';
import num3 from '../../image/num3.jpg';
import num4 from '../../image/num4.jpg';
import num5 from '../../image/num5.jpg';
import num6 from '../../image/num6.jpg';
import './courseStyles.css'
import { Input, Space } from 'antd';



function courseMain() {


  const { Search } = Input;



  const onSearch = value => console.log(value);


  return (<div>
    <div >
      <Space direction="vertical" >

        <Search
          className="course_search"
          placeholder="Search your course here "
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />

      </Space>

    </div>

    <div>
      <Carousel autoplay>
        <div>
          <img className="eduimg" src={num1} alt="image 1" height={500} width={1320} />
        </div>
        <div>
          <img className="eduimg" src={num2} alt="image 2" height={500} width={1320} />
        </div>
        <div>
          <img className="eduimg" src={num3} alt="image 2" height={500} width={1320} />
        </div>
        <div>
          <img className="eduimg" src={num4} alt="image 2" height={500} width={1320} />
        </div>
        <div>
          <img className="eduimg" src={num5} alt="image 2" height={500} width={1320} />
        </div>
        <div>
          <img className="eduimg" src={num6} alt="image 2" height={500} width={1320} />
        </div>
      </Carousel>
    </div>
    <div className="description">
      <br/>
      <h2 className ="cquote">Every expert was once a beginner .Start your first step  with  SKILL Lab  </h2>
    </div>
  </div>

  );
}

export default courseMain;