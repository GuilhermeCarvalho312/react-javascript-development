import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Collaborator.css";
import CollaboratorModal from "../CollaboratorModal/CollaboratorModal";

const Collaborator = ({
  name,
  image,
  employeePosition,
  id,
  onDelete,
  collaboratorCollor,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExcluir = () => {
    // Lógica para excluir o colaborador
    onDelete(id);
    handleClose();
  };

  return (
    <div className="Collaborator">
      <button
        type="button"
        className="delete btn-close"
        aria-label="Close"
        onClick={handleShow}
      ></button>

      <CollaboratorModal
        show={show}
        handleClose={handleClose}
        handleExcluir={handleExcluir}
      />

      <div className="cabecalho" style={collaboratorCollor}>
        <img src={image} alt={name} />
      </div>
      <div className="rodape">
        <h4>{name}</h4>
        <h5>{employeePosition}</h5>
      </div>
    </div>
  );
};

Collaborator.propTypes = {
  name: PropTypes.string.isRequired,
  employeePosition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Collaborator;
