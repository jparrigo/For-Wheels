import React from "react";
import "./Field.css";
import { Box, Slider } from "@mui/material";

// Distância mínina no slider de preço
const minDistance = 10;

const sliderTamanho = [
  {
    value: 0,
    label: "Pequeno",
  },
  {
    value: 1,
    label: "Compacto",
  },
  {
    value: 2,
    label: "Grande",
  },
];

export default function Field(props: { type: string; title: string }) {
  const [priceValue, setPriceValue] = React.useState<number[]>([20, 37]);
  const { type, title } = props;

  const handleChangePrice = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setPriceValue([
        Math.min(newValue[0], priceValue[1] - minDistance),
        priceValue[1],
      ]);
    } else {
      setPriceValue([
        priceValue[0],
        Math.max(newValue[1], priceValue[0] + minDistance),
      ]);
    }
  };

  if (type === "size") {
    return (
      <Box className="content-field">
        <span className="text-field">{title}</span>
        <Slider
          aria-label="Temperature"
          defaultValue={0}
          getAriaValueText={(value) => `${value}`}
          valueLabelDisplay="off"
          shiftStep={0}
          step={1}
          marks={sliderTamanho}
          min={0}
          max={2}
          track={false}
          sx={{
            color: "white",
            width: 300,
          }}
        />
      </Box>
    );
  } else if (type === "price") {
    return (
      <Box className="content-field">
        <span className="text-field">{title}</span>
        <Slider
          aria-label="Temperature"
          value={priceValue}
          onChange={handleChangePrice}
          getAriaValueText={(value) => {
            return `${value}R$`;
          }}
          valueLabelDisplay="on"
          sx={{
            color: "white",
            width: 300,
          }}
        />
      </Box>
    );
  }
}
