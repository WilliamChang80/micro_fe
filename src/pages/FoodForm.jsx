import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FoodForm = ({ history }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8093/api/food", {
        foodName: data.foodName,
        foodPrice: parseInt(data.foodPrice),
        rating: parseFloat(data.rating)
      })
      .then(history.push("/dashboard"));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="foodName" placeholder="Enter Food Name" ref={register} />
      <input name="foodPrice" placeholder="Enter Food Price" ref={register} />
      <input name="rating" placeholder="Enter Food Rating" ref={register} />
      <button className="btn btn-primary" />
    </form>
  );
};

export default FoodForm;
