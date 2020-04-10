import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {
    data: []
  };

  render() {
    const getImages = (imageName) => {
      axios.get("https://api.unsplash.com/", {
        client_id: process.env.API_KEY,
        query: imageName
      });
    };

    const renderData = async () => {
      const data = await axios.get("http://localhost:8091/api/food");
      const datas = data.data.data;
      datas.map((x) => getImages(x.foodName));
      return this.state.data.map((data) => (
        <div>
          <img src={data.imageName} />
          {data.foodName}
        </div>
      ));
    };
    return <div>{renderData()}</div>;
  }
}

export default Login;
