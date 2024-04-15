import "./Forms.css";
import { Slider } from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../assets/logo.png";

const sliderTamanho = [
  {
    value: 0,
    label: "Midsize",
  },
  {
    value: 1,
    label: "Compact",
  },
  {
    value: 2,
    label: "Large",
  },
];

export default function Forms() {
  return (
    <div className="forms-div">
      <div className="forms-logo">
        <img src={logo} />
      </div>
      <div className="forms-fields">
        <Box sx={{ width: 300 }}>
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
            sx={{
              color: "white",
            }}
          />
        </Box>
      </div>
    </div>
  );
}
