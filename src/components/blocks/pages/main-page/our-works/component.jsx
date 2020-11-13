import React from 'react';
import { useHistory } from "react-router-dom";
import ourWorksLeft from '../../../../../images/our_works_left.png';
import ourWorksRight from '../../../../../images/our_works_right.png';

import './style.css';

function OurWorks() {

  const history = useHistory();

  const handleSwitchToAllProjects = () => {
    history.push("/our-projects");
  };

  return (
    <section className="our-works">
      <div className="site-container">
        <div className="title">
          <h3>Наши работы</h3>
        </div>
        <div className="our_works_wrapper">
          <div className="our_works_insert">
            <img src={ourWorksLeft} alt=""></img>
            <p>29.07.2019</p>
          </div>

          <div className="our_works_insert">
            <p>29.07.2019</p>
            <img src={ourWorksRight} alt=""></img>
          </div>
        </div>
        <button className="button" onClick={handleSwitchToAllProjects}>Все проекты</button>
      </div>
    </section>
  );
}

export default OurWorks;
