import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

function AppLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar />
        <Box component="main" sx={{ mt: 8 }}>
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default AppLayout;
