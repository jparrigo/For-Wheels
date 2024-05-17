import "./FieldTextInput.css";
import { Box, TextField, styled } from "@mui/material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#000000",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0000",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#000000",
    },
    "&:hover fieldset": {
      borderColor: "#000000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },
});

export default function FieldTextInput(props: {
  title: string;
  firstText: string
  secondText?: string
}) {
  const { title, firstText, secondText } = props;

  return (
    <Box className="content-fieldTextInput">
      <span className="text-fieldTextInput">{title}</span>
      <CssTextField
        label={firstText}
        id="custom-css-outlined-input"
        size="small"
        sx={{
          width: 80,
        }}
      />
      <span
        className="text-fieldTextInput"
        style={{ color: "#000000", marginLeft: 6 }}
      >
        R$
      </span>
      {secondText != undefined ? (
        <>
          <CssTextField
            label={secondText}
            id="custom-css-outlined-input"
            size="small"
            sx={{
              width: 80,
            }}
          />
          <span
        className="text-fieldTextInput"
        style={{ color: "#000000", marginLeft: 6 }}
      >
        R$
      </span>
        </>
      ) : (
        ""
      )}
    </Box>
  );
}
