import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
// import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Collaborator.css";

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
      {/* <AiFillCloseCircle size={25} className="delete" onClick={onDelete} /> */}
      <button
        type="button"
        className="delete btn-close"
        aria-label="Close"
        onClick={handleShow}
      ></button>

      {/* Modal */}
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Excluir colaborador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tem certeza de que deseja excluir este colaborador?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleExcluir}>
              Excluir
            </Button>
          </Modal.Footer>
        </Modal>
      </>

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
