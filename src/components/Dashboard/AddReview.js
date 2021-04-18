import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddReview.css";
import Sidebar from "./Sidebar";

const AddReview = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      userName: data.userName,
      review: data.review,
      imageURL: imageURL,
    };
    const url = `https://peaceful-journey-87547.herokuapp.com/addReview`;
    console.log(reviewData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server side response"));
  };
  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "43e2db0acea534d5ddd6e1d6fa094725");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="d-flex">
      <div className="col-md-2">
        <Sidebar />
      </div>
      <div className="added-page col-md-10 ">
        <h1>Add Review</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            <h5>Your Name</h5>
          </label>
          <br />
          <input
            name="name"
            className="input-field"
            placeholder="Enter your name"
            {...register("name",{ required: true })}
          />
          <br />
          {errors.name && <span className="text-danger">This field is required</span>}
          <br/>
          <label htmlFor="">
            <h5>User Name</h5>
          </label>
          <br />
          <input
            name="userName"
            className="input-field"
            placeholder="@kennorman"
            {...register("userName",{ required: true })}
          />
          <br/>
          {errors.userName && <span className="text-danger">This field is required</span>}
          <br />
          <label htmlFor="">
            <h5>Add Image</h5>
          </label>
          <br />
          <input
            name="exampleRequired"
            className="input-field"
            type="file"
            onChange={handleImgUpload}
          />
          <br />
          <label htmlFor="">
            <h5>Write Your Opinion</h5>
          </label>
          <br />
          <input
            name="review" className="input-box" {...register("review",{ required: true })}
          />
          <br/>
          {errors.review && <span className="text-danger">This field is required</span>}
          <br/>
          <input className="btn btn-info input-field" type="submit" />
          <br/>
          
        </form>
      </div>
    </div>
  );
};

export default AddReview;
