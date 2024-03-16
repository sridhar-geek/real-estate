import  { useState } from "react";
import {
  Box,
  List,
  Typography,
  IconButton,
  MenuItem,
  ListItemText,
  Drawer,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const sections = ["Home", "About Us","Property","Services", "Contact"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <div>
      <List>
        {sections.map((section) => (
          <MenuItem key={section} onClick={handleDrawerToggle}>
            <ListItemText
              primary={section}
              sx={{ ":hover": { backgroundColor: "#071a45", color: "white" } }}
            />
          </MenuItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box display="flex" sx={{ margin: "10px 5%" }}>
      <IconButton
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { xs: "block", md: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Box>
        <Typography
          variant="h6"
          noWrap
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <span style={{ fontWeight: "bolder" }}>XYZ </span>Industries
        </Typography>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex", backgroundColor: "071a45" },
        }}
      >
        {sections.map((section) => (
          <Button key={section}>{section}</Button>
        ))}
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "none" },
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography>XYZ Industries</Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ borderRadius: "20px", border: "2px solid black" }}
        >
          Sign Up
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "20px" }}
        >
          Sign In
        </Button>
      </Box>
      <Drawer
        variant="temporary"
        anchor={theme.direction === "rtl" ? "left" : "left"}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better performance for mobile
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { width: 240 },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Header;
