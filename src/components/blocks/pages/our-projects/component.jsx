import React from "react";
import CatalogItem from "../catalog/catalog-item";
import projectPhoto1 from "../../../../images/our_works_left.png";
import projectPhoto2 from "../../../../images/our_works_right.png";
import { useHistory } from "react-router-dom";

import "./style.css";

function OurProjects() {
const history = useHistory();

const handleClick = () => {
    history.push("/project-description");
}

  return (
    <section className="our-projects">
      <div className="site-container">
        <div className="title">
          <h3>Наши проекты</h3>
        </div>
        <div className="our-projects__wrapper">
          <CatalogItem
            src={projectPhoto1}
            content="г.Молодечно"
            classNameItem="our-projects__top"
            onClick={handleClick}
          />
          <CatalogItem
            src={projectPhoto2}
            content="г.Молодечно"
            classNameItem="our-projects__bottom"
          />
          <CatalogItem
            src={projectPhoto1}
            content="г.Молодечно"
            classNameItem="our-projects__top"
          />
          <CatalogItem
            src={projectPhoto2}
            content="г.Молодечно"
            classNameItem="our-projects__bottom"
          />
          <CatalogItem
            src={projectPhoto1}
            content="г.Молодечно"
            classNameItem="our-projects__top"
          />
          <CatalogItem
            src={projectPhoto2}
            content="г.Молодечно"
            classNameItem="our-projects__bottom"
          />
          <CatalogItem
            src={projectPhoto1}
            content="г.Молодечно"
            classNameItem="our-projects__top"
          />
          <CatalogItem
            src={projectPhoto2}
            content="г.Молодечно"
            classNameItem="our-projects__bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default OurProjects;
