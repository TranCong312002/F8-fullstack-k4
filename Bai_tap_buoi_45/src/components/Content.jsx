import React, { useEffect, useState } from "react";
import MySlider from "./MySlider";
import { Slider, useChakra, useSlider } from "@chakra-ui/react";
function Content() {
  console.log(Slider);
  const [number, setNumber] = useState(1);
  useEffect(() => {
    const min = 1;
    const randomNum = Math.floor(Math.random() * (number - min + 1)) + min;
    console.log(randomNum);
  }, []);
  const getValueSlider = (value) => {
    setNumber(value);
  };
  useEffect(() => {
    console.log(number);
  }, [number]);
  return (
    <div>
      <div className="makeColor"></div>
      <div className="title">Chào mừng bạn đến với trò chơi đoán số!</div>
      <div className="turns">Còn 9/9 lần</div>
      <div className="check-number">
        Bạn cần tìm kiếm một số từ 1 đến {number}
      </div>
      <MySlider getValueSlider={getValueSlider} />
      <form action="">
        <label htmlFor="guess">Hãy thử nhập một số</label>
        <input
          type="number"
          id="guess"
          className="guess"
          name="guess"
          placeholder="Thử 1 số"
        />
      </form>
    </div>
  );
}

export default Content;
