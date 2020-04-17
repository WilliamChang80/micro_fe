import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const datas = await fetch("http://localhost:8093/api/food").then((res) =>
        res.json()
      );
      await datas.data.map((data) => getImages(data));
    };
    getData();
  }, []);

  const getImages = async (food) => {
    const { foodName } = food;
    const image = await axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          client_id: process.env.REACT_APP_UNSPLASH_API_KEY,
          query: foodName
        }
      })
      .then((res) => res.data.results[0].urls.small);

    setData((data) => [...data, { image: image, data: food }]);
  };

  const renderCard = () => {
    return data.map((data, index) => (
      <div key={index} className="card">
        <img
          src={data.image}
          alt={data.data.foodName}
          className="card-img-top card-image"
        ></img>
        <div className="card-body">
          {data.data.foodName}
          <div className="card-price">
            <i className="fa fa-money"></i>
            {data.data.foodPrice}
          </div>
          <div className="card-rating">
            <i className="fa fa-star"></i>
            {data.data.rating}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div>
      {data.length === 0 ? (
        <LoadingSpinner />
      ) : (
        <div className="card-container">{renderCard()}</div>
      )}
    </div>
  );
};

export default Dashboard;
