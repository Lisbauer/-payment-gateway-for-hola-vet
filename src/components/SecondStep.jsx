import React from "react";
import "./secondstep.css";

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
        <h2 style={{color:"#021187",}}>Completa los datos del titular</h2>

        <div className="input_process">
          <div className="input_box_2">
            <div className="input_box">
              <h3>Nombre*</h3>
              <input type="text" />
            </div>
            <div className="input_box">
              <h3>Apellido*</h3>
              <input type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Tipo de Documento</h3>
              <input type="text" />
            </div>
            <div className="input_box">
              <h3>DNI*</h3>
              <input type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Fecha de Nac*.</h3>
              <input type="text" />
            </div>
            <div className="input_box">
              <h3>Genero*</h3>
              <input type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Tel. celular (codigo de area + num)*</h3>
              <input style={{width:"650px"}} type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Email*</h3>
              <input style={{width:"650px"}} type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Direccion*</h3>
              <input style={{width:"650px"}} type="text" />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Localidad</h3>
              <input type="text" />
            </div>
            <div className="input_box">
              <h3>Codigo Postal</h3>
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
