import React from "react";
import PropTypes from "prop-types";
import "./Team.css";
import Collaborator from "../Collaborator/Collaborator";
import hexToRgba from "hex-to-rgba";

const Team = ({
  collaborators,
  name,
  id,
  corDeDestaque,
  corDeFundo,
  onDeleteCollaborator,
  changeCollor,
}) => {
  const styles = {
    team: {
      backgroundColor: hexToRgba(corDeDestaque, "0.3"),
    },
    h3: {
      borderColor: corDeDestaque,
    },
    cabecalho: {
      backgroundColor: corDeDestaque,
    },
  };

  return collaborators.length > 0 ? (
    <section className="team" style={styles.team}>
      <input
        value={styles.cabecalho.backgroundColor}
        type="color"
        className="input-cor"
        onChange={(event) => {
          changeCollor(event.target.value, id);
        }}
      />
      <span className="warning">Altere a secondaryCollor do time aqui!</span>
      <h3 style={styles.h3}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => {
          return (
            <Collaborator
              key={index}
              name={collaborator.name}
              collaboratorCollor={styles.cabecalho}
              employeePosition={collaborator.office}
              image={collaborator.imageLink}
              onDelete={onDeleteCollaborator}
            />
          );
        })}
      </div>
    </section>
  ) : (
    ""
  );
};

Team.propTypes = {
  name: PropTypes.string.isRequired,
  corDeDestaque: PropTypes.string.isRequired,
  corDeFundo: PropTypes.string.isRequired,
};

export default Team;
