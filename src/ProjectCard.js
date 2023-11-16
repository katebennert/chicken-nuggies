import React from "react";

function ProjectCard({ project }) {

    return (
        <div className="mb-10 flex hover:border">
            <img src={project.img} alt={project.title} className="w-32 pr-10"/>
            <div>
                <p className="mb-2 font-bold">{project.title}</p>
                <p className="mb-4 text-sm">{project.description}</p>
                <div className="flex flex-row flex-wrap">{project.technologies.map(t => <div key={project.technologies.indexOf(t)} className="mr-1 text-white mb-1 rounded-full pr-1 pl-1 border">{t}</div>)}</div>
            </div>
        </div>
    );
  }
  
  export default ProjectCard;
  