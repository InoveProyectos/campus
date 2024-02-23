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
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ForumIcon from '@mui/icons-material/Forum';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import styles from "./ResponsiveDrawer.module.css";
import Logout from "../views/Logout";
import Logo from "../assets/logoInove.png";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import Avatar from '@mui/material/Avatar';
import { AppContext } from "../context/context";
import { useTheme } from "@emotion/react";
import footWave from '../assets/footWave.svg'
import theme from "../utils/Theme";
const drawerWidth = 220;

function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const { state } = React.useContext(AppContext)
  const { username, isStaff } = state

  console.log(username)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  // Puedes acceder a los colores del tema

  const drawer = (
    <div className={styles.panel}>
      <Toolbar className={styles.containerTolbar}>
        <div>
          <ModeSwitcher />
        </div>
      </Toolbar>
      <Divider className={styles.divider} />
      <List>
        <ListItemButton onClick={() => navigate("/cursos")}>
          <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
          <ListItemText primary={"Cursos"} />
        </ListItemButton>
        <ListItemButton onClick={() => window.open(`https://admin.inovecode.com/perfil/chat/discord/link/?username=${username}`, "_blank")}>
          <ListItemIcon><SportsEsportsIcon /></ListItemIcon>
          <ListItemText primary={"Discord"} />
        </ListItemButton>
        <ListItemButton onClick={() => navigate("/pagos")}>
          <ListItemIcon><RequestQuoteIcon /></ListItemIcon>
          <ListItemText primary={"Pagos"} />
        </ListItemButton>
      </List>
      <Divider className={styles.divider} />
      <List >
        <ListItemButton onClick={() => navigate("/logout")}>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary={"Logout"} />
        </ListItemButton>
      </List>
    </div>
  );

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
        <Toolbar style={{ background: "linear-gradient(270deg, rgba(0,177,185,1) 0%, rgba(0,151,236,1) 100%)" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" width="100%" height="84.22px">
            <article style={{ marginTop: "20px", justifyContent: "space-between", display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div >
                <img src={Logo} alt="logo inove" />
              </div>
              <Avatar sx={{ background: "linear-gradient(to right top, #ee146d, #f00b60, #f00753, #f00b45, #ee1437)", color: 'white' }} aria-label="recipe">
                {username ? username[0].toUpperCase() : "."}
              </Avatar>
            </article>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
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
            "& .MuiPaper-root" : {
              boxSizing: "border-box",
              width: drawerWidth,
              background: theme => theme.palette.background.paper,
              zIndex: 1
            }
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

            <img className={styles.footWave} src={footWave} alt="photo"></img>
            </Drawer>
      </Box>
      <section className={styles.topTitle}>

        <Outlet />
      </section>
    </Box>
  );
}

export default ResponsiveDrawer;
