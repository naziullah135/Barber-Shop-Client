import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddService.css";
import Sidebar from "./Sidebar";

const AddService = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://peaceful-journey-87547.herokuapp.com/addService`;
    console.log(serviceData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
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
    <div className="row">
       <div className="col-md-3">
       <Sidebar />
       </div>
      <div className="added-page col-md-9">
        <h1>Add Service</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            <h5>Service Name</h5>
          </label>
          <br />
          <input
            name="name"
            className="input-field"
            placeholder="Enter Service name"
            {...register("name",{ required: true })}
          />
          <br/>
          {errors.name && <span className="text-danger">This field is required</span>}
          <br/>
          <label htmlFor="">
            <h5>Select Gender</h5>
          </label>
          <br />
          <select className="input-field" {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <br/>
          <label htmlFor="">
            <h5>Price</h5>
          </label>
          <br />
          <input
            name="price"
            className="input-field"
            placeholder="Enter price"
            {...register("price",{ required: true })}
          />
          <br/>
          {errors.price && <span className="text-danger">This field is required</span>}
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
          <input className="btn btn-info input-field" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddService;
