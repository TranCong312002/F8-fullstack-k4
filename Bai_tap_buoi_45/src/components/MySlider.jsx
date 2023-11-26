import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  useSlider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
function MySlider({ getValueSlider }) {
  const [sliderValue, setSliderValue] = useState(10);
  const [showTooltip, setShowTooltip] = useState(false);
  // useEffect(() => {
  //   getValueSlider(sliderValue);
  // }, [sliderValue]);
  return (
    <Slider
      id="slider"
      defaultValue={10}
      min={0}
      max={2048}
      colorScheme="teal"
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={100} mt="2" ml="-2.5" fontSize="lg">
        100
      </SliderMark>
      <SliderMark value={512} mt="2" ml="-2.5" fontSize="lg">
        512
      </SliderMark>
      <SliderMark value={1024} mt="2" ml="-2.5" fontSize="lg">
        1024
      </SliderMark>
      <SliderMark value={1536} mt="2" ml="-2.5" fontSize="lg">
        1536
      </SliderMark>
      <SliderMark value={2048} mt="2" ml="-8" fontSize="lg">
        2048
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg="teal.500"
        color="white"
        placement="top"
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb
          onClick={() => {
            getValueSlider(sliderValue);
          }}
        />
      </Tooltip>
    </Slider>
  );
}

export default MySlider;
