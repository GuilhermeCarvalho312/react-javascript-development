import React, { useState } from "react";
import "./Button.css";
import Alert from "../Alert/Alert";

/**
 * Componente de botão reutilizável para formulários.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo do botão.
 * @param {string} props.url - A URL para verificar se é um link válido.
 * @returns {React.Element} Um elemento React que representa o botão.
 * @example
 * <Button url="https://www.example.com" isValid={true}>Criar card</Button>
 */
const Button = (props) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {showAlert && (
        <Alert
          bootstrapClass={props.alertBootstrapClass}
          text={props.alertBoxText}
          onClose={() => setShowAlert(false)}
        />
      )}

      <button
        onClick={() => setShowAlert(true)}
        className="form-button btn btn-outline-primary btn-lg"
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
