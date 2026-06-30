import { createTheme } from "@mui/material/styles";

export const PRIMARY = "#014a5b";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: PRIMARY,
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "'Cairo', sans-serif",
  },
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          "&.Mui-active": { color: PRIMARY },
          "&.Mui-completed": { color: PRIMARY },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          fontSize: 13,
          fontFamily: "'Cairo', sans-serif",
          "&.Mui-active": { color: PRIMARY, fontWeight: 600 },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontFamily: "'Cairo', sans-serif",
        },
      },
    },
    MuiTextField: {
      defaultProps: { size: "small" },
      styleOverrides: {
        root: {
          "& input, & textarea": {
            fontFamily: "'Cairo', sans-serif",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "'Cairo', sans-serif",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "'Cairo', sans-serif",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Cairo', sans-serif",
        },
      },
    },
  },
});

export default theme;