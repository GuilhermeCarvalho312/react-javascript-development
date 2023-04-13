import React from "react";
import { Modal, Button } from "react-bootstrap";

const CollaboratorModal = ({ show, handleClose, handleExcluir }) => {
  return (
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
  );
};

export default CollaboratorModal;
