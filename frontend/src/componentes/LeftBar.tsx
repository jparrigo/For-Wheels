import { Button } from "@mui/material";
import UndoIcon from "@mui/icons-material/Undo";
import AddIcon from "@mui/icons-material/Add";
import SavesButton from "./savesButton";
import "./LeftBar.css";

function LeftBar() {
  return (
    <div className="leftbar-div">
      <div className="content-div">
        <div className="buttons-div">
          <Button
            className="button"
            variant="contained"
            size="small"
            color="info"
            startIcon={<UndoIcon />}
            sx={{
              justifyContent: "left",
              textTransform: "none",
              fontSize: 15
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
              fontSize: 15
            }}
          >
            Nova Procura
          </Button>
        </div>

        <div className="saves-div">
          <span className="saves-text">Salvos</span>
          <SavesButton title="Onix RS" />
          <SavesButton title="Limozine 3 portas" />
          <SavesButton title="Polo" />
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
