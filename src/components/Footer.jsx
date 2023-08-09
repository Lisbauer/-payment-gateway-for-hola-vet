import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="quienes_somos_container">
        <h2>Quiénes somos</h2>
        <p>
          <strong>Hola vet</strong> es un producto de Ar Vida, compañía de
          seguros de vida con más de 120 años de experiencia en el pais
          <br /> y mas de 200.000 asegurados, convirtiendola en una de las
          empresas con mas trayectoria en su rubro.{" "}
        </p>
        <h4>
          Adaptandonos a las distintas etapas de la vida para brindar la mejor
          atención a nuestros clientes.
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
          <a
            href="mailto:info@holavet.com.ar"
            target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h4 style={{ marginTop: "50px", marginBottom: "40px" }}>
              info@holavet.com.ar
            </h4>
          </a>
          <div className="numbers_container">
            <a
              href="https://wa.me/1140830075"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <div className="numbers_box">
                <img src="./images/whatsapp2.png" alt="whatsapp logo" />
                <h3>11 4083-0075</h3>
              </div>
            </a>

            <a
              href="https://wa.me/1138945039"
              target="blank"
              style={{ textDecoration: "none" }}
            >
              <div className="numbers_box">
                <img src="./images/whatsapp2.png" alt="whatsapp logo" />
                <h3>11 3894-5039</h3>
              </div>
            </a>
          </div>
        </div>

        <div className="container_footer_ul">
          <ul className="ul_footer">
            <a href="https://holavet.com.ar/">
              <li>Home</li>
            </a>
            <a href="https://holavet.com.ar/blog/">
              <li>Blog</li>
            </a>
            <a href="https://holavet.com.ar/contact/">
              <li>Contacto</li>
            </a>
            <a href="https://holavet.com.ar/preguntas-frecuentes/">
              <li>Preguntas Frecuentes</li>
            </a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Footer;
