import { Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import theme from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// Lazy load the footer
const Footer = lazy(() => import("./Footer"));

// Loading component for footer
const FooterLoading = () => <div className="h-[400px] bg-btn-primary"></div>;

function AppLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        component="main"
        sx={{
          mt: 8,
          minHeight: "calc(100vh - 400px)", // Account for footer height
          position: "relative",
          zIndex: 1,
        }}
      >
        <Outlet />
      </Box>
      <Suspense fallback={<FooterLoading />}>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default AppLayout;
