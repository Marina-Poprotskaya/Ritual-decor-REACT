import React from "react";
import CatalogItem from "../catalog/catalog-item";
import projectsData from '../project-description/data';
import { useHistory } from "react-router-dom";

import "./style.css";

function OurProjects() {

const history = useHistory();

const handleClick = (id) => {
    history.push(`/project-description/${id}`);
}

  return (
    <section className="our-projects">
      <div className="site-container">
        <div className="title">
          <h3>Наши проекты</h3>
        </div>
        <div className="our-projects__wrapper">
          {projectsData.map((item, index) => {
            const {id, imagesURL, nameOfProject} = item;
            return (
              <CatalogItem
              key={id}
              src={imagesURL[0]}
              content={nameOfProject}
              classNameItem={index % 2 === 0 ?  "our-projects__top" : "our-projects__bottom"}    
              onClick={() => handleClick(id)}
            />
            )
          })} 
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
