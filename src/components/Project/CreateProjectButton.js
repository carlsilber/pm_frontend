import React from "react";
import { Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    // Fragments grouping a list of children without adding extra nodes to the DOM. Shorter syntax <></>
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Create a Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;
