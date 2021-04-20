import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "./Sidebar";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const adminData = {
      email: data.email,
    };
    const url = `http://localhost:5000/admin`;
    console.log(adminData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log("server side response"));
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-9">
        <h1>Make Admin</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">
            <h5 className="text-center">Email</h5>
          </label>
          <br />
          <input
            name="email"
            className="input-field"
            placeholder="Enter email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <input className="btn btn-info input-field" type="submit" />
          <br />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
