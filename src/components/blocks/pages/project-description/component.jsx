import React from "react";
import { useParams } from "react-router-dom";
import projectsData from "./data";

import "./style.css";

function ProjectDescription() {
  let params = useParams();
  const { id } = params;
  return (
    <section className="project-description">
      <div className="site-container">
        <div className="title">
          <h3>{projectsData[id].nameOfProject}</h3>
        </div>
        <div className="description">{projectsData[id].description}</div>
        <div className="description__images-wrapper">
          {projectsData[id].imagesURL.map((item, index) => {
            return <img className="description__image" src={item} alt="our projects" key={index}></img>;
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectDescription;
