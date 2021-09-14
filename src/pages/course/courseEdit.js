import { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import { Select, Button, Avatar } from "antd";
import './courseStyles.css';
import Resizer from "react-image-file-resizer";
import create_course from '../../image/create_course.jpg';
import Eraser from '../../image/Eraser.jpg';
import { toast } from 'react-toastify';
import useRequest from "../../services/RequestContext";
  
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
    category: '',
    imagePreview: "",


  });

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

  };

  const {request} = useRequest();

  const handleImage = (e) => {
    let file = e.target.files[0];
    setPreview(window.URL.createObjectURL(file));
    setUploadButtonText(file.name);
    setValues({ ...values, loading: true });

    // resize
    Resizer.imageFileResizer(file, 720, 500, "JPEG", 100, 0, async (uri) => {
      try {
       let { data } = await request.post("course/upload-image", {
          image: uri,
        });
        console.log("IMAGE UPLOADED" ,data);
        // set image in the state
        setValues({ ...values, loading: false });
      } catch (err) {
        console.log(err);
        setValues({ ...values, loading: false });
        toast("Image upload failed. Try later.");
      }
    });
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
          <input className="course_select"
            type="text"
            name="name"
            placeholder="Name of the course "
            value={values.name}
            onChange={handleChange}
          />
        </div>

        <div >
          <textarea className="course_select"
            name="description"
            placeholder="Course Description"
            cols="7"
            rows="7"
            value={values.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <div >

          <div >
            <Select className="course_selector"

              value={values.paid}
              onChange={(v) => setValues({ ...values, paid: v })}
            >
              <Option value={true}>Paid</Option>
              <Option value={false}>Free</Option>
            </Select>
          </div>

          {values.paid && (
            <div className="course_select">
              <b> Select the course price :</b>
              <Select className="course_select"
                defaultValue="$0.00"
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
          <input className="course_select"
            type="text"
            name="category"
            placeholder="Course category"
            value={values.category}
            onChange={handleChange}
          />
        </div>
        <div >

          <div className="imagehandling" >
            <label>
              {values.loading ? "Uploading" : " Upload the relevant course image here "}
              <input className="course_select"
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                
              />
              {preview && <Avatar width={200} src={preview} />}

            </label>
          </div>
        </div>
        <div  >
          <Button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            loading={values.loading}
            type="primary"
            size="large"
            shape="round"
          >
            {values.loading ? "Saving..." : "Update"}
          </Button>
        </div>
      </div>

    </form>
  );

  const onFinish =async(values) =>{
    console.log("value" ,values);
    try{

      const  { result } = await request.post("course/course", values);
      console.log("IMAGE UPLOADED" ,result);
    }catch(e){
      console.log("POST coursecreate error " ,e);
    }
  };




  return (
    <div >

      <h1 className="course_h1" >Edit Course</h1>
      <img src={Eraser} alt="image 1" className="create_course_image" />
      <div className="course_form"> {courseCreateForm()} </div>



    </div>
  );
};

export default CourseCreate;
