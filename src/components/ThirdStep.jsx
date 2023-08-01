import React, { useState } from "react";
import "./thirdstep.css";
import PetDataSection from "./PetDataSection";

const SecondStep = () => {
  const [isCatSelected, setIsCatSelected] = useState(false);
  const [isDogSelected, setIsDogSelected] = useState(false);
  const [genero, setGenero] = useState("");
  const [isValidationTriggered, setIsValidationTriggered] = useState(false);
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");
  const [isFormComplete, setIsFormComplete] = useState(true);
  const [isCheckboxValid, setIsCheckboxValid] = useState(true);
  const [petSections, setPetSections] = useState([{ index: 1, isCatSelected: false, isDogSelected: false }]);
  const [showPetSection, setShowPetSection] = useState(false); // Local state to control visibility

  const handleAddPetSection = () => {
    const newIndex = petSections.length + 1;
    setPetSections([...petSections, { index: newIndex, isCatSelected: false, isDogSelected: false, nombre: "", raza: "", edad: "", genero: "" }]);
  };

  const handlePetInputChange = (index, field, value) => {
    const updatedPetSections = petSections.map((pet, i) => {
      if (i === index) {
        return { ...pet, [field]: value };
      }
      return pet;
    });
    setPetSections(updatedPetSections);
  };

  const handleCatChange = (index) => {
    const updatedPetSections = petSections.map((pet, i) => {
      if (i === index) {
        return { ...pet, isCatSelected: true, isDogSelected: false };
      }
      return pet;
    });
    setPetSections(updatedPetSections);
  };

  const handleDogChange = (index) => {
    const updatedPetSections = petSections.map((pet, i) => {
      if (i === index) {
        return { ...pet, isCatSelected: false, isDogSelected: true };
      }
      return pet;
    });
    setPetSections(updatedPetSections);
  };

  const handleContinue = () => {
    // Validación de los campos
    const isComplete = nombre && genero && raza;
    setIsValidationTriggered(true);
    setIsFormComplete(isComplete);

    const isCheckboxSelected = isCatSelected || isDogSelected;
    setIsCheckboxValid(isCheckboxSelected);
  };

  return (
    <div className="second_step">
      <div className="process_container">
        <h2>Proceso de contratacion</h2>
        <ul className="process_list">
          <li>
            <span style={{ padding: "6px 17px" }}>1</span> Datos de titular
          </li>
          <li style={{ color: "#021187" }}>
            <span style={{ border: "solid #021187 1px" }}>2</span> Datos de
            mascotas
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
        <h2 style={{ color: "#021187" }}>Completá los datos de las mascotas</h2>
        <p>
          Completa los datos de la mascotas o las mascotas depediendo el plan
          que hayas elegido{" "}
        </p>
        <div className="input_process">
          <div>
            {petSections.map((section, index) => (
              <PetDataSection
              key={section.index}
              index={index}
              isCatSelected={section.isCatSelected}
              isDogSelected={section.isDogSelected}
              handleCatChange={() => handleCatChange(index)}
              handleDogChange={() => handleDogChange(index)}
              nombre={section.nombre}
              onNombreChange={(value) => handlePetInputChange(index, "nombre", value)}
              edad={section.edad}
              onEdadChange={(value) => handlePetInputChange(index, "edad", value)}
              raza={section.raza}
              onRazaChange={(value) => handlePetInputChange(index, "raza", value)}
              genero={section.genero}
              onGeneroChange={(value) => handlePetInputChange(index, "genero", value)}
              isValidationTriggered={isValidationTriggered}
              isCheckboxValid={isCheckboxValid}
            />
            ))}

{!showPetSection && (
            <button onClick={handleAddPetSection} style={{ fontSize: "24px", marginTop: "80px" }}>
              +
            </button>
          )}
          </div>

          <h3 className="process_continue" onClick={handleContinue}>
            Continuar →
          </h3>
          {!isFormComplete && isValidationTriggered && (
            <p className="warning">Complete todos los campos por favor</p>
          )}
          <h3 style={{ color: "#021187", textDecoration: "underline" }}>
            Hablar con un asesor
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
