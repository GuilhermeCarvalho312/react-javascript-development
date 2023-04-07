import React from "react";
import PropTypes from "prop-types";
import "./Team.css";
import Collaborator from "../Collaborator/Collaborator";

const Team = ({
  collaborators,
  name,
  primaryColor,
  secondaryColor,
  onDeleteCollaborator,
}) => {
  const styles = {
    team: {
      backgroundColor: secondaryColor,
    },
    h3: {
      borderColor: primaryColor,
    },
  };

  return collaborators.length > 0 ? (
    <section className="team" style={styles.team}>
      <h3 style={styles.h3}>{name}</h3>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => {
          return (
            <Collaborator
              key={index}
              name={collaborator.name}
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
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default Team;
