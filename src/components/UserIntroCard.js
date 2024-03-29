import React from "react";
import "../UserIntroCard.css";
const UserIntroCard = ({ username, imageSrc }) => {
  return (
    <div className="user-intro-card">
      <img
        src={imageSrc}
        alt={`${username}'s profile`}
        className="user-image"
      />
      <h2 className="username">{username}</h2>
    </div>
  );
};

export default UserIntroCard;
