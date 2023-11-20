import React from "react";

function ProjectCard({ project }) {

    return (
        <div className="mb-10 flex items-start rounded-md p-4 transition duration-300 ease-in-out project-card hover:shadow-lg hover:cursor-pointer">
          <img src={project.img} alt={project.title} className="w-32 h-32 object-cover rounded mr-4" />
          <div>
            <p className="mb-2 font-bold">{project.title}</p>
            <p className="mb-4 ">{project.description}</p>
            <div className="flex flex-wrap">
              {project.technologies.map((t, index) => (
                <div key={index} className="mr-2 mb-2 px-2 py-1 text-white rounded-full border">{t}</div>
              ))}
            </div>
          </div>
        </div>
      );
      
  }
  
  export default ProjectCard;
  