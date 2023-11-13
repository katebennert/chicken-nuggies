import React from "react";
import projects from "./ProjectArray";

function Projects() {
    return (
        <div className="pt-20">
            {projects.map(p => p.title)
            }
        </div>
    );
  }
  
  export default Projects;
  