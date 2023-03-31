import React from "react";
import PropTypes from "prop-types";
import "./Team.css";
import Collaborator from "../Collaborator/Collaborator";

const Team = (props) => {
  const styles = {
    team: {
      backgroundColor: props.secondaryColor,
    },
    h3: {
      borderColor: props.primaryColor,
    },
  };

  return props.collaborators.length > 0 ? (
    <section className="team" style={styles.team}>
      <h3 style={styles.h3}>{props.name}</h3>
      <div className="collaborators">
        {props.collaborators.map((collaborator, index) => {
          return (
            <Collaborator
              key={index}
              name={collaborator.name}
              employeePosition={collaborator.office}
              image={collaborator.imageLink}
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
  name: PropTypes.object.isRequired,
  primaryColor: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
};

export default Team;
