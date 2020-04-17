import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const FoodForm = ({ history }) => {
  const { register, handleSubmit } = useForm();
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
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="form-content">
        <div className="form-title">Create Food</div>
        <div className="form-group field">
          <input
            className="form-field"
            name="foodName"
            placeholder="Enter Food Name"
            ref={register}
          />
          <label className="form-label">Food Name</label>
        </div>
        <div className="form-group field">
          <input
            className="form-field"
            name="foodPrice"
            placeholder="Enter Food Price"
            ref={register}
          />
          <div className="form-label">Food Price</div>
        </div>
        <div className="form-group field">
          <input
            className="form-field"
            name="rating"
            placeholder="Enter Food Rating"
            ref={register}
          />
          <div className="form-label">Food Rating</div>
        </div>
        <button className="btn btn-primary form-submit">Submit</button>
      </form>
    </div>
  );
};

export default FoodForm;
