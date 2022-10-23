import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Box, useTheme, Typography } from "@mui/material";
import { SidebarData } from "../../data/NavbarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <Box backgroundColor={colors.primary[400]}>
      <IconContext.Provider value={{ color: "primary" }}>
        <Box className="navbar" backgroundColor={colors.primary[400]}>
          <Link to="#" className="menu-bars">
            <MenuIcon onClick={showSidebar} />
          </Link>
        </Box>
        <Box
          className={sidebar ? "nav-menu active" : "nav-menu"}
          backgroundColor={colors.primary[400]}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <CloseIcon />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <Typography
                      className="typography"
                      variant="h5"
                      fontWeight="600"
                      color={colors.grey[100]}
                    >
                      {item.icon}
                      {item.title}
                    </Typography>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>
      </IconContext.Provider>
    </Box>
  );
}

export default Navbar;
