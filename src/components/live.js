/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
function LiveSection() {
  const [topTutors, setTopTutors] = useState([
    {
      ID: 1,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 7,
    },
    {
      ID: 2,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 8,
    },
    {
      ID: 3,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 9,
    },
    {
      ID: 4,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 4,
    },
    {
      ID: 5,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 15,
    },
    {
      ID: 6,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 16,
    },
    {
      ID: 6,
      name: "Lana Marandina",
      username: "lanamara",
      dp: "https://i.pravatar.cc/100" + 16,
    },
  ]);
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
