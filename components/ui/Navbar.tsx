import { useState } from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import NightlightRoundRoundedIcon from "@mui/icons-material/NightlightRoundRounded";
import html2pdf from "./../../public/htmltopdf.png";

export const Navbar = () => {
  const [theme, setTheme] = useState("lightTheme");
  const [language, setLanguage] = useState("");

  const handleThemeLight = () => {
    setTheme("darkTheme");
  };

  const handleThemeNight = () => {
    setTheme("lightTheme");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar disableGutters>
          {/* md */}

          <ImageListItem
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }}
          >
            <Image src={html2pdf} alt="portada" width={50} height={50} />
          </ImageListItem>

          {theme === "lightTheme" && (
            <IconButton
              size="large"
              onClick={handleThemeLight}
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <LightModeRoundedIcon />
            </IconButton>
          )}
          {theme === "darkTheme" && (
            <IconButton
              size="large"
              onClick={handleThemeNight}
              color="inherit"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <NightlightRoundRoundedIcon />
            </IconButton>
          )}

          {/* xs */}

          <ImageListItem
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Image src={html2pdf} alt="portada" width={50} height={50} />
          </ImageListItem>
          {theme === "light" && (
            <IconButton
              size="large"
              onClick={() => setTheme("night")}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <LightModeRoundedIcon />
            </IconButton>
          )}
          {theme === "night" && (
            <IconButton
              size="large"
              onClick={() => setTheme("light")}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <NightlightRoundRoundedIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
