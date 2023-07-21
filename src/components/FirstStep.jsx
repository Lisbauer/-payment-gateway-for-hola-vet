import React from "react";
import "./firststep.css";

const FirstStep = () => {
  return (
    <div className="table_container">
      <img className="tittle_img" src="./images/tittle.png" alt="tittle" />
      <div className="banner_tittle_container">
        <h2 className="second_tittle">Que incluye?</h2>
        <div className="banner_container">
          <img
            className="banners_img"
            src="./images/planbasico.png"
            alt="banner basico"
          />
          <img
            className="banners_img"
            src="./images/planpreferido.png"
            alt="banner preferido"
          />
          <img
            className="banners_img"
            src="./images/planfull.png"
            alt="banner full"
          />
          <p>Cantidad de eventos anuales </p>
        </div>
      </div>

         <section className="plan_container">
      <div>
        <div className="plan_box">
          <div>
            <h4>Responsabilidad Civil</h4>
            <h5>Hasta $300.000.- al año</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
            <h4>Eutanasia, vejez, cremación y retiro del cuerpo</h4>
            <h5>Hasta $7200.- por mascota</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
            <h4>Consultas veterinarias 24hs</h4>
            <h5>Ilimitado</h5>
          </div>
          <div className="number_box" style={{gap:"90px",}}>
            <p>Ilimitadas</p>
            <p>Ilimitadas</p>
            <p>Ilimitadas</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Consultas veterinarias en centro veterinario</h4>
          <h5>Hasta $2500.- por evento</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Análisis y estudios en caso de enfermedad grave o accidente</h4>
          <h5>Hasta $3500.- por evento</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Consulta médica veterinaria a domicilio - chequeo general</h4>
          <h5>Hasta $3000.- por evento</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Intervención quirúrgica</h4>
          <h5>Hasta $1200.- por reintegro</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>
            Consulta veterinaria con especialista (Control de tratamiento)</h4>
          <h5>Hasta $6500.- por evento</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Vacunación</h4>
          <h5>Hasta $2000.- por evento</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Castración</h4>
          <h5>Hasta $4000.- por reintegro</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Guardería</h4>
          <h5>Hasta $4500.- por mascota</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Baño</h4>
          <h5>Incluye corte</h5>
          </div>
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <h4>Descuentos en accesorios y alimentos hasta el 20% </h4>
          <hr />
          <div className="number_box">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
        </div>

      </div>
    </section>

    <div className="contract_box">
      <div className="contract_container">
        <h3 className='contract'>Contratar</h3>
        <h3 className='contract'>Contratar</h3>
        <h3 className='contract'>Contratar</h3>    
      </div>
      <h3 className="call_text">Prefiero que me llamen</h3>
    </div>

    </div>
  );
};

export default FirstStep;
