/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hola, qué tal?";
  const aboutme = `Mi nombre es ${FirstName} ${LastName}, soy un apasionado de la programación desde
   muy joven. Siempre me llamó la atención y curiosidad por conocer cómo era el funcionamiento 
   interno de diferentes aplicaciones informáticas en distintos ámbitos como lo son: web, móvil
    y aplicaciones de escritorio. Desde ahí hasta el día de hoy he experimentado con varias tecnologías 
    y lenguajes diferentes.`;

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              
              <Typography component='span'> Envíame un mensaje.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
