import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./secondstep.css";
import { useNavigate, useLocation } from "react-router-dom";

const SecondStep = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [dni, setDni] = useState("");
  const [genero, setGenero] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [localidad, setLocalidad] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(true);
  const [isValidationTriggered, setIsValidationTriggered] = useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    setSelectedDate(storedData.selectedDate || null);
    setNombre(storedData.nombre || "");
    setApellido(storedData.apellido || "");
    setTipoDocumento(storedData.tipoDocumento || "");
    setDni(storedData.dni || "");
    setGenero(storedData.genero || "");
    setTelefono(storedData.telefono || "");
    setEmail(storedData.email || "");
    setDireccion(storedData.direccion || "");
    setLocalidad(storedData.localidad || "");
    setCodigoPostal(storedData.codigoPostal || "");
  }, []);

  useEffect(() => {
    const formData = {
      selectedDate,
      nombre,
      apellido,
      tipoDocumento,
      dni,
      genero,
      telefono,
      email,
      direccion,
      localidad,
      codigoPostal,
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    const handleBeforeUnload = () => {
      localStorage.setItem("formData", JSON.stringify(formData));
    };
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [
    selectedDate,
    nombre,
    apellido,
    tipoDocumento,
    dni,
    genero,
    telefono,
    email,
    direccion,
    localidad,
    codigoPostal,
  ]);

  const handleKeyPress = (event) => {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
    }
  };

  const handleContinue = () => {
    const formInputs = document.querySelectorAll(
      ".input_box input, .input_box select"
    );
    let isComplete = true;
    formInputs.forEach((input) => {
      if (!input.value) {
        isComplete = false;
        input.classList.add("incomplete");
      } else {
        input.classList.remove("incomplete");
      }
    });

    setIsValidationTriggered(true);
    setIsFormComplete(isComplete);

    if (!isComplete) {
      return;
    }

    navigate("/step3", {
      state: {
        selectedDate,
        nombre,
        apellido,
        tipoDocumento,
        dni,
        genero,
        telefono,
        email,
        direccion,
        localidad,
        codigoPostal,
      },
    });
  };

  return (
    <div className="second_step">
      <div className="process_container">
        <h2>Proceso de contratacion</h2>
        <ul className="process_list">
          <li style={{ color: "#021187" }}>
            <span style={{ border: "solid #021187 1px", padding: "6px 17px" }}>
              1
            </span>{" "}
            Datos de titular
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

      <div className="input_section">
        <h2 style={{ color: "#021187" }}>Completa los datos del titular</h2>

        <div className="input_process">
          <div className="input_box_2">
            <div className="input_box">
              <h3>Nombre*</h3>
              <input
                className="shorter_inputs"
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !nombre ? "1px solid red" : "",
                }}
              />
            </div>
            <div className="input_box">
              <h3>Apellido*</h3>
              <input
                className="shorter_inputs"
                type="text"
                value={apellido}
                onChange={(event) => setApellido(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !apellido ? "1px solid red" : "",
                }}
              />
            </div>
          </div>

          <div className="input_box_2">
  <div className="input_box">
    <h3>Tipo de Documento</h3>
    <select
      value={tipoDocumento}
      onChange={(event) => {
        setTipoDocumento(event.target.value);
        setIsValidationTriggered(false); // Reset validation trigger when the selection changes
      }}
      style={{
        border: isValidationTriggered && !tipoDocumento ? "1px solid red" : "",
      }}
    >
      <option value="">Seleccionar tipo de documento</option>
      <option value="DNI">DNI</option>
      <option value="Pasaporte">Pasaporte</option>
      <option value="Carnet de extranjería">Carnet de extranjería</option>
      <option value="Licencia de conducir">Licencia de conducir</option>
    </select>
  </div>

  <div className="input_box">
    <h3>{tipoDocumento ? tipoDocumento : "Documento"}</h3>
    <input
      className="shorter_inputs"
      type="text"
      value={dni}
      onChange={(event) => setDni(event.target.value)}
      style={{
        border: isValidationTriggered && !dni ? "1px solid red" : "",
      }}
    />
  </div>
</div>


          <div className="input_box_2">
            <div className="input_box">
              <h3>Fecha de Nacimiento*</h3>
              <DatePicker
                className="shorter_inputs"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                scrollableYearDropdown
                yearDropdownItemNumber={100}
                placeholderText="DD/MM/AAAA"
                wrapperClassName={
                  isValidationTriggered && !selectedDate ? "incomplete" : ""
                }
              />
            </div>
            <div className="input_box">
              <h3>Género*</h3>
              <select
                value={genero}
                onChange={(event) => setGenero(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !genero ? "1px solid red" : "",
                }}
              >
                <option value="" disabled defaultValue>
                  Selecciona una opción
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Tel. celular (codigo de area + num)*</h3>
              <input
                className="inputs_larger"
                type="text"
                onKeyPress={handleKeyPress}
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !telefono ? "1px solid red" : "",
                }}
              />
              <p className="parrafo_telefono">
                Incluí el código de área + el número de teléfono. Sólo números.
                Ej. 11 12345678
              </p>
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Email*</h3>
              <input
                className="inputs_larger"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !email ? "1px solid red" : "",
                }}
              />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Direccion*</h3>
              <input
                className="inputs_larger"
                type="text"
                value={direccion}
                onChange={(event) => setDireccion(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !direccion ? "1px solid red" : "",
                }}
              />
            </div>
          </div>

          <div className="input_box_2">
            <div className="input_box">
              <h3>Localidad</h3>
              <input
                className="shorter_inputs"
                type="text"
                value={localidad}
                onChange={(event) => setLocalidad(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !localidad ? "1px solid red" : "",
                }}
              />
            </div>
            <div className="input_box">
              <h3>Codigo Postal</h3>
              <input
                className="shorter_inputs"
                type="text"
                value={codigoPostal}
                onChange={(event) => setCodigoPostal(event.target.value)}
                style={{
                  border:
                    isValidationTriggered && !codigoPostal
                      ? "1px solid red"
                      : "",
                }}
              />
            </div>
          </div>

          <h3 className="process_continue" onClick={handleContinue}>
            Continuar →
          </h3>
          {/* Mostramos el mensaje de advertencia si el formulario no está completado */}
          {!isFormComplete && isValidationTriggered && (
            <p className="warning">Complete todos los campos por favor</p>
          )}
          <h3 style={{ color: "#021187", textDecoration: "underline", cursor:"pointer" }}>
            Hablar con un asesor
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
