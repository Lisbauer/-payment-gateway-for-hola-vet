import React from "react";
import "./thirdstep.css";

const SecondStep = () => {
  return (
    <div className="second_step">
      <div className="process_container">
        <h2>Proceso de contratacion</h2>
        <ul className="process_list">
          <li>
            <span>1</span> Datos de titular
          </li>
          <li>
            <span>2</span> Datos de mascotas
          </li>
          <li>
            <span>3</span> Pago
          </li>
          <li>
            <span>4</span> Confirmacion
          </li>
        </ul>
      </div>

      <div>
        <h2 style={{color:"#021187",}}>Completá los datos de las mascotas</h2>
        <p>Completa los datos de la mascotas o las mascotas  depediendo el plan que hayas elegido  </p>
        <h3 style={{color: "#2AFEB2"}}>Datos de la mascota 1</h3>
        <div className="input_process">
          <div className="input_box_2">
            <div className="input_box">
              <h3>Nombre de la mascota 1</h3>
              <input style={{width:"650px"}} type="text" />
            </div>
          </div>

          <div className="especie_container">
            <h3 style={{fontWeight:"300", color:"#021187"}}>¿De qué especie es tu hijo peludo?</h3>
            <div className="cat_dog_box_img">
              <div>
              <img src="./images/cat.png" alt="gatito icono" />
              <div className="cat_box">
              <input type="checkbox" />
              <p>Gato</p>
              </div>
              </div>
              <div>
              <img src="./images/dog.png" alt="perrito icono" />
              <div className="cat_box">
              <input type="checkbox" />
              <p>Perro</p>
              </div>
              </div>
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Raza</h3>
              <input type="text" />
              <p style={{lineHeight:"15px", fontSize:"13px", color:"#5A5A5C"}}>*Recordá que la protección no es valida  para <br /> mascotas de 10 años o más.</p>
            </div>
            <div className="input_box">
              <h3>Genero</h3>
              <input type="text" />
            </div>
          </div>

         

       


          <h3 className='process_continue'>Continuar  →</h3>
          <h3 style={{color:"#021187", textDecoration:"underline"}}>Hablar con un asesor</h3>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
