import React, { Component } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Collaborator.css";

class Collaborator extends Component {
  render() {
    const { name, image, employeePosition, onDelete, collaboratorCollor } =
      this.props;

    debugger;
    return (
      <div className="Collaborator">
        <AiFillCloseCircle size={25} className="delete" onClick={onDelete} />
        <div className="cabecalho" style={collaboratorCollor}>
          <img src={image} alt={name} />
        </div>
        <div className="rodape">
          <h4>{name}</h4>
          <h5>{employeePosition}</h5>
        </div>
      </div>
    );
  }
}
Collaborator.propTypes = {
  name: PropTypes.string.isRequired,
  employeePosition: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Collaborator;
