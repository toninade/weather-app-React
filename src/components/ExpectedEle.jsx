import React from "react";

const ExpectedEle = ({ ele }) => {
  return (
    <li>
      <p>{ele.time.split(" ")[1]}</p>
      <figure>
        <img src="../.././public/imgs/weather-app.png" />
      </figure>
      <p>
        {ele.temp_c}
        <span>c</span>
      </p>
    </li>
  );
};

export default ExpectedEle;
