import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList() {
  const projects = [
    {
      name: "Project 1",
      about: "This is a description of Project 1.",
      technologies: ["React", "JavaScript", "CSS"],
    },
    {
      name: "Project 2",
      about: "This is a description of Project 2.",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      name: "Project 3",
      about: "This is a description of Project 3.",
      technologies: ["Python", "Flask", "SQL"],
    },
  ];

  return (
    <div>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          name={project.name}
          about={project.about}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;
