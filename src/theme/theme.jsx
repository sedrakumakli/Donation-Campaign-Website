import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  palette: {
    primary: {
      main: "#1976d2",
    },
  },

   typography: {
    fontFamily: "Cairo, Arial, sans-serif",
  },
});

export default theme;