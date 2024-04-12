/* eslint-disable jsx-a11y/iframe-has-title */
import { Link } from "react-router-dom";
import "../Liveclass.css";
import { useState } from "react";
import Footer from "../components/Footer";
import PopupMessage from "../components/popup";
function LiveClass() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);

    // Optional: Hide the popup after a certain time (e.g., 3000 milliseconds)
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };


  const message = "class is not started yet";
  return (
    <div>
      <div class="live-classroom-details">
        <div class="header">
          <h1>Class Topic: Learn Python</h1>
          <p>Author: John Doe</p>
        </div>
        <div class="main-content">
          <div class="description">
            <h2>Description:</h2>
            <p>
              This is a live classroom session covering various topics related
              to the python course. We will cover all the relted topic of python
              in this course.
            </p>
          </div>
          <div class="schedule">
            <h2>Schedule: 11:00AM-1:00AM</h2>
            <p>
              <strong>Date and Time:</strong> January 1, 2023, 10:00 AM
            </p>
            <p>
              <strong>Duration:</strong> 2 hours
            </p>
            <p>
              <strong>Participants:</strong> 50
            </p>
          </div>
        </div>
        <div class="course-preview">
          <h2>Course Preview:</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/your-video-id"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Link>
          <button onClick={handleShowPopup}>Join Clasroom</button>
          {showPopup && <PopupMessage message={message} />}
        </Link>
      </div>
      <Footer />
    </div>
  );
}
export default LiveClass;
