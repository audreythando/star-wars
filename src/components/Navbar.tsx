import React from "react";
import { Box, IconButton, styled } from "@mui/material";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import CompareIcon from "@mui/icons-material/Compare";
import AddCardIcon from "@mui/icons-material/AddCard";

const NavbarContainer = styled(Box)({
  position: "fixed",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: "rgba(26, 27, 61, 0.8)",
  borderRadius: "50px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  width: "fit-content",
  maxWidth: "90%",
});

const FloatingNavbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavbarContainer>
      <IconButton
        color="inherit"
        onClick={() => scrollToSection("character-form")}
      >
        <DynamicFormIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => scrollToSection("character-card")}
      >
        <AddCardIcon />
      </IconButton>
      <IconButton
        color="inherit"
        onClick={() => scrollToSection("comparison-table")}
      >
        <CompareIcon />
      </IconButton>
    </NavbarContainer>
  );
};

export default FloatingNavbar;
