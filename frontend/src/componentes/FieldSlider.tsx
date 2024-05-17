import "./FieldSlider.css";
import { Box, Slider } from "@mui/material";

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

export default function FieldSlider(props: { title: string }) {
  const { title } = props;

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
          display: 'flex',
          color: "white",
          width: 350,
        }}
      />
    </Box>
  );
}
