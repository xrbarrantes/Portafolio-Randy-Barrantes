import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Typography>Inicio</Typography>
      </a>
      <a
        href="#works"
        onClick={() => setActiveNav("#works")}
        className={activeNav === "#works" ? "active" : ""}
      >
        <Typography>Proyectos</Typography>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Typography>Sobre mí</Typography>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Typography>Contacto</Typography>
      </a>
    </nav>
  );
};