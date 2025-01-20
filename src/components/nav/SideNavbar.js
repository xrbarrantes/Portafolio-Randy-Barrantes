import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import "./SideNavbar.css";

export const SideNavbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Se activa cuando el 60% de la sección está visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(`#${entry.target.id}`); // Actualiza el estado según la sección visible
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section); // Observa todas las secciones
    });

    return () => observer.disconnect(); // Limpia el observador al desmontar el componente
  }, []);

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
