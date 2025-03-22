import * as React from "react";
import PropTypes from "prop-types";
// Material UI components:

import AppBar from "@mui/material/AppBar";
// its like a div with additional features and more flexible
import Box from "@mui/material/Box";
// Resets default browser styles
import CssBaseline from "@mui/material/CssBaseline";
// Creates a line to separate content
import Divider from "@mui/material/Divider";
// side navigation menu for mobile devices
import Drawer from "@mui/material/Drawer";
// button for icons (e.g., the hamburger menu)
import IconButton from "@mui/material/IconButton";
// list layout for the mobile menu
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
// hamburger menu icon for the mobile menu
import MenuIcon from "@mui/icons-material/Menu";
// layout container for organizing navigation bar content
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

// import logo from assets
import coreLogo from "../assets/images/logo/core-logo.png";
import Container from "@mui/material/Container";
import { Link } from "react-router";

const drawerWidth = 240;
const navItems = ["Home", "About Us", "Services", "Our Work", "Contact Us"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          width: "65px",
          marginInline: "auto",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <img src={coreLogo} alt="Core Logo" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ bgcolor: "var(--color-navbar)" }}
          position="fixed"
        >
          <Container maxWidth="lg">
            <Toolbar className="flex justify-between items-center !px-0">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon sx={{ color: "var(--color-heading-3)" }} />
              </IconButton>
              <Box sx={{ width: "65px" }}>
                <img src={coreLogo} alt="Core Logo" />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button
                    key={item}
                    className="!text-base"
                    sx={{
                      textTransform: "none",
                      mx: 1.5,
                      color: "var(--color-heading-3)",
                    }}
                  >
                    <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                      {item}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </Container>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
