import React from "react";

function ProjectCard({ project }) {

    return (
        <div className="mb-10 border rounded-md flex">
            <img src={project.img} alt={project.title} className="w-32 pr-10"/>
            <div>
                <h3 className="mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="flex flex-row flex-wrap">{project.technologies.map(t => <div key={t.index} className="mr-1 text-white mb-1 rounded-full pr-1 pl-1">{t}</div>)}</div>
            </div>
        </div>
    );
  }
  
  export default ProjectCard;
  