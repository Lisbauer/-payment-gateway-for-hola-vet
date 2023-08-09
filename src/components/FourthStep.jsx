import React from "react";
import "./fourthstep.css";

const FourthStep = () => {
  return (
    <div className="fourthstep1">
      <div className="fourthstep">
        <div className="final_step_container">
          <div className="text_banner">
            <div className="texts_container">
              <h2 data-aos="fade-down">¡ Gracias por elegirnos ! </h2>
              <p>
                A continuación recibiras un correo de bienvenida con los pasos a
                seguir para utilizar el seguro
              </p>
            </div>
            <div className="btn_text">
              <a href="https://holavet.com.ar/" style={{textDecoration:"none"}}><h3 className="inicio_btn">Volver al Inicio</h3></a>
              <div className="text2_container">
                <h4>¿Necesitas Ayuda?</h4>
                <div className="whatsapp_box">
                  <img src="./images/whatsapp.png" alt="whatsapp icon" />
                  <a href="https://wa.me/1140830075" target="blank"><h5 style={{color:"#021187"}}>Escribínos</h5></a>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="img_catdog_box">
            <img src="./images/dogandcat.png" alt="perro y gato imagen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
