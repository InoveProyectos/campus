import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import ModeSwitcher from "./ModeSwitcher";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LogoutIcon from "@mui/icons-material/Logout";
import styles from "./ResponsiveDrawer.module.css";
import Logout from "../views/Logout";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuItemClick = (text) => {
    switch (text) {
      case "Cursos":
        navigate("/cursos");
        break;
      case "Cuotas":
        navigate("/cuotas");
        break;
      case "Logout":
        navigate("/logout");
      default:
        // navigate("/");
        break;
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["Cursos", "Cuotas"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuItemClick(text)}>
              <ListItemIcon>
                {(() => {
                  switch (text) {
                    case "Cursos":
                      return <AccountBalanceIcon />;
                    case "Cuotas":
                      return <RequestQuoteIcon />;
                    default:
                      break;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Contacto", "Nosotros", "Reglamento", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuItemClick(text)}>
              <ListItemIcon>
                {(() => {
                  switch (text) {
                    case "Logout":
                      return <LogoutIcon />;
                    default:
                      return <QuestionMarkIcon />;
                  }
                })()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" width="100%">
            <article className={styles.containerDrawer}>
              <div>
                <h3> Responsive drawer</h3>
              </div>
              <div>
                <ModeSwitcher />
              </div>
            </article>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <section className={styles.topTitle}>
        <Outlet />
      </section>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
