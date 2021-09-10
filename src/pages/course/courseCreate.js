import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Select, Button ,Avatar } from "antd";
import './courseCreate.css';



//destructure
const { Option } = Select;

const CourseCreate = () => {


  // initial state values 
  const [values, setValues] = useState({
    name: "",
    description: "",
    price: "0.00",
    uploading: false,
    paid: false,
    loading: false,
    category:'',
    imagePreview: "",

  });

  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    setPreview(window.URL.createObjectURL(e.target.files[0]));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
 
  //price dropdown selection array
  const priceArray = [];
  for (let i = 9.99; i <= 100.99; i++) {
    priceArray.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
  }



  const courseCreateForm = () => (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="text"
            name="name"
            className="tx1"
            placeholder="Name of the course "
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div >
          <textarea
            name="description"
            placeholder="Course Description"
            cols="7"
            rows="7"
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div >
       
            <div className="selct1" >
              <Select

                value={values.paid}
                onChange={(v) => setValues({ ...values, paid: !values.paid })}
              >
                <Option value={true}>Paid</Option>
                <Option value={false}>Free</Option>
              </Select>
            </div>
              
          {values.paid && (
            <div className="selct1">
             <b> Select the course price :</b>
              <Select
                defaultValue="$9.99"
                style={{ widht: "100%" }}
                onChange={(v) => setValues({ ...values, price: v })}
                tokenSeparators={[,]}
                size="large"
              >
                {priceArray}
              </Select>
            </div>
          )}
        </div>


        <div>
          <input
            type="text"
            name="category"
            placeholder="Course category"
            value={values.category}
            onChange={handleChange}
          />
        </div>
        <div >
          
            <div className="imagehandling" >
              <label >
                {values.loading ? "Uploading" : " Upload the relevant course image here "}
                <input
                  type="file"
                  name="image"
                  onChange={handleImage}
                  accept="image/*"
                  hidden
                />
            {preview && <Avatar width={200} src={preview} />}

              </label>
            </div>
        </div>
          <div >
            <Button
              onClick={handleSubmit}
              disabled={values.loading || values.uploading}
              className="btn btn-primary"
              loading={values.loading}
              type="primary"
              size="large"
              shape="round"
              >
              {values.loading ? "Saving..." : "Save & Continue"}
            </Button>
          </div>
        </div>
      
    </form>
  );

  return (
    <div >
      
      <h1 >Create Course</h1>
      <div className="form"> {courseCreateForm()} </div>
      <pre>{JSON.stringify(values, null, 4)}</pre>

    </div>
  );
};

export default CourseCreate;
