import React from "react";
import "./fourthstep.css";

const FourthStep = () => {
  return (
    <div className="fourthstep1">
      <div className="fourthstep">
        <div className="final_step_container">
          <div className="text_banner">
            <div className="texts_container">
              <h2>¡ Gracias por elegirnos ! </h2>
              <p>
                A continuación recibiras un correo de bienvenida con los pasos a
                seguir para utilizar el seguro
              </p>
            </div>
            <div className="btn_text">
              <h3 className="inicio_btn">Volver al Inicio</h3>
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

        <section className="quienes_somos_container">
          <h2>Quienes somos</h2>
          <p>
            <strong>Hola vet</strong> es un producto de Ar Vida, compa;ia de
            seguros de vida con mas de 120 a;os de experiencia en el pais
            <br /> y mas de 200.000 asegurados, convirtiendola en una de las
            empresas con mas trayectoria en su rubro.{" "}
          </p>
          <h4>
            Adaptandonos a las distintas etapas de la vida para brindar la mejor
            atencion a nuestros clientes.
          </h4>
          <img
            src="./images/primerolafamilia.png"
            alt="primero la familia banner"
          />
          <img src="./images/amimanera.png" alt="a mi manera banner" />
          <img src="./images/holarene.png" alt="Hola rene banner" />
        </section>

        <section className="footer_container">
          <div className="footer_text_number">
            <img src="./images/logo.png" alt="logo" />
            <h4>Av. Libertador 5930, Piso 12 - C1428ARP</h4>
            <h4 style={{ color: "#2AFEB2", marginTop: "60px" }}>
              Atencion al cliente
            </h4>
            <h4>Lunes a Viernes de 10 a 16hs.</h4>
            <a href="mailto:info@holavet.com.ar" target="blank" style={{textDecoration:"none", color:"white"}}><h4 style={{ marginTop: "50px", marginBottom: "40px" }}>
              info@holavet.com.ar
            </h4></a>
            <div className="numbers_container">
              <a href="https://wa.me/1140830075" target="blank">
                <div className="numbers_box">
                  <img src="./images/whatsapp2.png" alt="whatsapp logo" />
                  <h3>11 4083-0075</h3>
                </div>
              </a>

              <a href="https://wa.me/1138945039" target="blank">
                <div className="numbers_box">
                  <img src="./images/whatsapp2.png" alt="whatsapp logo" />
                  <h3>11 3894-5039</h3>
                </div>
              </a>
            </div>
          </div>

          <div className="container_footer_ul">
            <ul className="ul_footer">
              <li>Home</li>
              <li>Blog</li>
              <li>Contacto</li>
              <li>Preguntas Frecuentes</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FourthStep;
