import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#b51a1a',
        },
        secondary: {
          main: '#4a60c5',
        },
      },
});

theme = responsiveFontSizes(theme);

export default theme;