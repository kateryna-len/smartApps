import React from 'react';
import './style.css';
import icon from '../../assets/sun_red.png';
import icon_person from '../../assets/guk.png';
import vector from '../../assets/Vector.png';

function MainContent() {
  return (
    <div className="mainContent_container">
      <div className="main_container">
        <div className="title">
          <h2>
            The <span className="text_red"> website is under development</span>,
            and our team is working hard to release it faster
          </h2>
          <img src={icon} alt="icon" className="icon" />
        </div>
        <div className="addition_information">
          <div className="img_container">
            <img src={icon_person} alt="icon_person" />
          </div>
          <div className="text_container">
            <p>
              <span className="text_red">
                If you want to order IOS Applications
              </span>{' '}
              for gambling, betting or other verticals,{' '}
              <span className="text_red">please contact us in telegram</span>
            </p>
          </div>
        </div>
        <div className="arrow_container">
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
