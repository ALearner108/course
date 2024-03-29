// PopupMessage
import React, { useState, useEffect } from "react";
import "../Popup.css";

const PopupMessage = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={`popup-message ${isVisible ? "visible" : "hidden"}`}>
      {message}
    </div>
  );
};

export default PopupMessage;
