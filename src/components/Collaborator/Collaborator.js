import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Collaborator.css";
import CollaboratorModal from "../CollaboratorModal/CollaboratorModal";

/**
 * Componente que representa um colaborador na lista.
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.name - O nome do colaborador.
 * @param {string} props.image - A URL da imagem do colaborador.
 * @param {string} props.employeePosition - A posição do colaborador na empresa.
 * @param {string} props.id - O ID do colaborador.
 * @param {function} props.onDelete - Função a ser executada quando o colaborador for excluído.
 * @param {Object} props.collaboratorCollor - Objeto com a cor do cabeçalho do colaborador.
 * @param {boolean} props.favorite - Indica se o colaborador é um favorito.
 * @param {function} props.onFavorite - Função a ser executada quando o colaborador for favoritado/desfavoritado.
 * @returns {JSX.Element} - Elemento React que representa um colaborador.
 */
const Collaborator = ({
  name,
  image,
  employeePosition,
  id,
  onDelete,
  collaboratorCollor,
  favorite,
  onFavorite,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleExcluir = () => {
    // Lógica para excluir o colaborador
    onDelete(id);
    handleClose();
  };

  function favoriteCollaborator() {
    onFavorite(id);
  }

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

        <div className="favorite">
          {favorite ? (
            <AiFillHeart size={25} color="red" onClick={favoriteCollaborator} />
          ) : (
            <AiOutlineHeart size={25} onClick={favoriteCollaborator} />
          )}
        </div>
      </div>
    </div>
  );
};

Collaborator.propTypes = {
  name: PropTypes.string.isRequired,
  employeePosition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  collaboratorCollor: PropTypes.object,
  favorite: PropTypes.bool,
  onFavorite: PropTypes.func,
};

export default Collaborator;
