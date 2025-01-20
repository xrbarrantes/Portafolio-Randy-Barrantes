import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import './Works.css';
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'SRS Reg Control',
      description: `Desarrollé una
aplicación web para gestión de
registros utilizando React y Vite
para un alto rendimiento.
Implementé Redux Toolkit y fetch
para una comunicación eficiente
con el backend, asegurando una
experiencia de usuario fluida y un
diseño escalable`,
      alter: 'React Portfolio',
      image: `${Portfolio}`,
    },
    {
      id: 2,
      title: 'GYMSMART',
      description: `Es un sistema de gestión integral diseñado específicamente 
para gimnasios, este ofrece soluciones avanzadas y personalizadas a 
través de tres perfiles clave: Administrador, Entrenador y Cliente. Cada perfil cuenta 
con un conjunto específico de funcionalidades diseñadas para facilitar la operación 
diaria y ofrecer una experiencia de entrenamiento más efectiva y moderna.`,
      alter: 'VeriTru Project',
      image: `${Veritru}`,
    },
    {
      id: 3,
      title: 'Portafolio Personal',
      description: `Desarrollé mi portafolio web utilizando React y Material-UI, 
      con un diseño responsivo y escalable. Este proyecto refleja mi experiencia 
      técnica y presenta mis habilidades, proyectos y logros de manera profesional,
      priorizando rendimiento y experiencia del usuario.`,
      alter: 'LoFo Project',
      image: `${Lofo}`,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
