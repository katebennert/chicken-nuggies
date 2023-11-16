import React from "react";
import projects from "./ProjectArray";
import ProjectCard from "./ProjectCard";

function Projects() {
    return (
        <div className="pt-20">
            {projects.map(project => <ProjectCard project={project} key={project.id} />)}
        </div>
    );
  }
  
  export default Projects;
  