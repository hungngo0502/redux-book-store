import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PRIMARY = {
  lighter: "#dfff00",
  light: "#ffaf00",
  main: "#ff5f00",
  dark: "#ffffff",
  darker: "#ff6f23",
  contrastText: "#0b8c12",
};
const SECONDARY = {
  lighter: "#FFD07F",
  light: "#FF9999",
  main: "#FF8243",
  dark: "#E26A2C",
  darker: "#cc571f",
  contrastText: "#FFD07F",
};

function MThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      primary: PRIMARY,
      secondary: SECONDARY,
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MThemeProvider;
