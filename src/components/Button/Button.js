import React, { useState } from "react";
import "./Button.css";

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
  const baseClass = "fade show";

  return (
    <>
      {showAlert && (
        <div
          className={props.alertBootstrapClass + " " + baseClass}
          role="alert"
        >
          {props.alertBoxText}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
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
