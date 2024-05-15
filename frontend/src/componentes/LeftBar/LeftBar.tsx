import { Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import AddIcon from "@mui/icons-material/Add";
import SavesButton from "../savesButton/savesButton";
import "./LeftBar.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function LeftBar() {
  let [list, setList] = useState([]);
  useEffect(() => {
    let cars = localStorage.getItem("saves-cars");
    if (cars != null) {
      let result = JSON.parse(cars);
      console.log(result);
      setList(result);
    }
  },[])
  const navigate = useNavigate();
  return (
    <div className="leftbar-div">
      <div className="content-div">
        <div className="buttons-div">
          <Button
            onClick={() => navigate(-1)}
            className="button"
            variant="contained"
            size="small"
            color="info"
            startIcon={<UndoIcon />}
            sx={{
              justifyContent: "left",
              textTransform: "none",
              fontSize: 15,
            }}
          >
            Voltar
          </Button>
          <Button
            className="button"
            variant="contained"
            size="small"
            color="success"
            startIcon={<AddIcon />}
            sx={{
              justifyContent: "left",
              textTransform: "none",
              fontSize: 15,
            }}
          >
            Nova Procura
          </Button>
        </div>

        <div className="saves-div">
          <span className="saves-text">Salvos</span>
          {
            list.map((item: any,i) => {
              return <SavesButton key={i} title={item.estilo} />
            })
          }
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
