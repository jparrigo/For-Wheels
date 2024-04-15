import './Filtro.css'
import { Slider } from "@mui/material";
import Box from '@mui/material/Box';
const sliderTamanho = [{
  value: 0,
  label: "Midsize"
},{
  value: 1,
  label: "Compact"
},{
  value: 2,
  label: "Large"
}]
function Filtro() {
  return (
    <main className='filtro-main'>
    <Box sx={{width: 300}}>
      <Slider
        aria-label="Temperature"
        defaultValue={0}
        getAriaValueText={(value) => `${value}`}
        valueLabelDisplay="auto"
        shiftStep={0}
        step={1}
        marks={sliderTamanho}
        min={0}
        max={2}
        color='success'
      />
      </Box>
    </main>
  )
}

export default Filtro;