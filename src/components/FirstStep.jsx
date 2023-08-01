import React from "react";
import "./firststep.css";

const FirstStep = () => {
  return (
    <div className="table_container">
      <img className="tittle_img" src="./images/tittle.png" alt="tittle" />
      <div className="banner_tittle_container">
        <h2 className="second_tittle">Que incluye?</h2>
        <div className="banner_container">
          <div className="banner_parrafo">
          <div style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
          <img
            className="banners_img"
            src="./images/planbasico.png"
            alt="banner basico"
          />
          <p>1</p>
          <p>Ilimitadas</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <h4 className="sin_limites">Sin limite</h4>
          <h4 className="charge_number">$1610</h4>
          <h3 className='contract'>Contratar</h3>
          </div>
          <div className="number_column" style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
          <img
            className="banners_img"
            src="./images/planpreferido.png"
            alt="banner preferido"
          />
          <p>1</p>
          <p>Ilimitadas</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <h4 className="sin_limites">Sin limite</h4>
          <h4 className="charge_number">$1825</h4>
          <h3 className='contract'>Contratar</h3>
          </div>
          <div style={{alignItems:"center", display:"flex", flexDirection:"column"}}>
          <img
            className="banners_img"
            src="./images/planfull.png"
            alt="banner full"
          />
          <p>1</p>
          <p>Ilimitadas</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>5</p>
          <h4 className="sin_limites">Sin limite</h4>
          <h4 className="charge_number">$2050</h4>
          <h3 className='contract'>Contratar</h3>
          </div>
</div>
        </div>
      </div>

         <section className="plan_container">
      <div>
        <div className="plan_box">
          <div>
            <h4>Responsabilidad Civil</h4>
            <h5>Hasta $300.000.- al año</h5>
          </div>
        </div>

        <div className="plan_box">
          <div>
            <h4>Eutanasia, vejez, cremación <br /> y retiro del cuerpo</h4>
            <h5>Hasta $7200.- por mascota</h5>
          </div>

          <hr />
        </div>

        <div className="plan_box">
          <div>
            <h4>Consultas veterinarias 24hs</h4>
            <h5>Ilimitado</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Consultas veterinarias <br /> en centro veterinario</h4>
          <h5>Hasta $2500.- por evento</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Análisis y estudios en caso de <br /> enfermedad grave o accidente</h4>
          <h5>Hasta $3500.- por evento</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Consulta médica veterinaria <br /> a domicilio - chequeo general</h4>
          <h5>Hasta $3000.- por evento</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Intervención quirúrgica</h4>
          <h5>Hasta $1200.- por reintegro</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>
            Consulta veterinaria con <br /> especialista (Control de tratamiento)</h4>
          <h5>Hasta $6500.- por evento</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Vacunación</h4>
          <h5>Hasta $2000.- por evento</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Castración</h4>
          <h5>Hasta $4000.- por reintegro</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Guardería</h4>
          <h5>Hasta $4500.- por mascota</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <div>
          <h4>Baño</h4>
          <h5>Incluye corte</h5>
          </div>
          <hr />
        </div>

        <div className="plan_box">
          <h4>Descuentos en accesorios<br /> y alimentos hasta el 20% </h4>
          <hr />
        </div>
    <div className="contract_box">
      <h3 className="call_text">Prefiero que me llamen</h3>
    </div>
      </div>
    </section>



    </div>
  );
};

export default FirstStep;
