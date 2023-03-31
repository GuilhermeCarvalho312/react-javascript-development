import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Collaborator.css";

class Collaborator extends Component {
  render() {
    const { name, image, employeePosition } = this.props;

    return (
      <div className="Collaborator">
        <div className="cabecalho">
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
};

export default Collaborator;
