import React from "react";

/**
 * Componente reutilizável de alerta para exibir mensagens para o usuário.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.bootstrapClass - A classe Bootstrap para estilizar o alerta (por exemplo, "alert alert-success").
 * @param {string} props.text - O texto a ser exibido dentro do alerta.
 * @param {Function} props.onClose - A função a ser chamada quando o botão "Fechar" for clicado.
 * @returns {React.Element} Um elemento React que representa o alerta.
 * @example
 * <Alert bootstrapClass="alert alert-danger" text="Ocorreu um erro." onClose={handleCloseAlert} />
 */
const Alert = (props) => {
  return (
    <div className={props.bootstrapClass} role="alert">
      {props.text}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
};

export default Alert;
