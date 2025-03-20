// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#AD0300", // Primary button background color
      light: "#D70300", // Light button text color
      dark: "#800020", // Darker shade for headings
    },
    secondary: {
      main: "#444444", // Paragraph text
    },
    background: {
      paper: "#ffffff", // Default card background
    },
    text: {
      primary: "#111827", // Main text color
      secondary: "#A2A2A2", // Placeholder text color
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "4rem", // 64px for main titles
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.5rem", // 40px for card headings
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem", // 16px for paragraphs
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1536,
    },
  },
});

export default theme;
