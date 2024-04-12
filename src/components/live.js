/* eslint-disable jsx-a11y/img-redundant-alt */

import "../App.css";

import { NavLink } from "react-router-dom";
function LiveSection() {
  
  const tutorList = [];
  for (let i = 0; i < 10; i++) {
    tutorList.push(
      <button className="tutor" key={"tutor-live-" + i}>
        <img
          className="bl"
          height="100"
          width="100"
          alt="image"
          src={"https://i.pravatar.cc/100" + i}
        />
      </button>
    );
  }
  return (
    <NavLink to="/liveclass" className="section rel">
      <h2 className="title s24 fontb">Streaming Now </h2>
      <div className="tutors rel flex">{tutorList}</div>
    </NavLink>
  );
}
export default LiveSection;
