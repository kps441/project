import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, IconButton, Divider, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import BarChartIcon from "@mui/icons-material/BarChart";
import MessageIcon from "@mui/icons-material/Message";
import ReportIcon from "@mui/icons-material/Report";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <IconButton onClick={toggleMenu} sx={{ position: "fixed", top: 10, left: 10, zIndex: 10 }}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleMenu}
        sx={{
          width: 260,
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "#1e1e1e",
            color: "white",
            paddingTop: "20px",
            paddingBottom: "20px",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        {/* Logo Section */}
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <img src="/logo.png" alt="Logo" style={{ width: 100 }} />
        </Box>
        <Divider sx={{ backgroundColor: "#444" }} />
        
        {/* Menu Items */}
        <List>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><PersonIcon /></ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><BarChartIcon /></ListItemIcon>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><MessageIcon /></ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><NotificationsIcon /></ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><ReportIcon /></ListItemIcon>
            <ListItemText primary="Reports" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><SettingsIcon /></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><SupportAgentIcon /></ListItemIcon>
            <ListItemText primary="Support" />
          </ListItem>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><HelpIcon /></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItem>
        </List>
        
        <Divider sx={{ backgroundColor: "#444" }} />
        
        {/* Logout */}
        <List>
          <ListItem button sx={{ "&:hover": { backgroundColor: "#444" } }}>
            <ListItemIcon sx={{ color: "#fff" }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideMenu;