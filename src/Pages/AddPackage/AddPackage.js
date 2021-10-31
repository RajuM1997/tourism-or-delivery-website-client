import React, { useState } from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const AddPackage = () => {
  const [packages, setPackages] = useState([]);
  console.log(packages);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://eerie-demon-56840.herokuapp.com/package`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          swal("Good job!", "You clicked the button!", "successfully");
          setPackages();
        }
      });
  };
  return (
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add Packages</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Title"
          className="p-2 m-2 w-50"
        />
        <input
          {...register("location")}
          placeholder="Location"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("reviw")}
          placeholder="Reviw"
          type="address"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("duration")}
          placeholder="Duration"
          className="p-2 m-2 w-50"
        />
        <input
          {...register("price")}
          placeholder="price"
          className="p-2 m-2 w-50"
        />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("image")}
          placeholder="ImageUrl"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Post Package"
          className="btn btn-success w-25"
        />
      </form>
    </div>
  );
};

export default AddPackage;
