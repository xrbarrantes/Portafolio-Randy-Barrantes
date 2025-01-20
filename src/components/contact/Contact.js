/* eslint-disable no-unused-vars */
import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const greetings = "¡Contáctame!";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0whu4pe', 'template_rjrp0pa', form.current, 'kfevJbCPXj5-M4Acu')
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: '¡Su correo ha sido enviado correctamente!',
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error.text);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Hubo un problema al enviar el mensaje.',
          text: 'Por favor, inténtelo de nuevo más tarde.',
        });
      });

    e.target.reset();
  };

  return (
    <section id="contact">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="contact">
          <div className="_form_wrapper">
            <form ref={form} onSubmit={sendEmail} className={classes.form}>
              {/* Campo para el nombre */}
              <TextField
                id="outlined-name-input"
                label="Nombre:"
                type="text"
                size="small"
                variant="filled"
                name="name" // Clave usada en EmailJS
                className={classes.formfield}
                required
              />
              {/* Campo para el correo */}
              <TextField
                id="outlined-email-input"
                label="Email:"
                type="email"
                size="small"
                variant="filled"
                name="email" // Clave usada en EmailJS
                className={classes.formfield}
                required
              />
              {/* Campo para el mensaje */}
              <TextField
                id="outlined-message-input"
                label="Mensaje:"
                type="textarea"
                size="small"
                multiline
                minRows={5}
                variant="filled"
                name="message" // Clave usada en EmailJS
                className={classes.formfield}
                required
              />
              {/* Botón de envío */}
              <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                <Typography component='span'> Enviar </Typography>
              </button>
            </form>
          </div>
          <h1 className="contact_msg">{greetings}</h1>
        </div>
      </Container>
    </section>
  );
};
