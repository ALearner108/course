import React, { useState } from "react";
import "../Teacher.css";
import { json, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const CourseForm = () => {
  const userName = useSelector((state) => state.account.username);
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState({
    courseName: "",
    description: "",
    price: "",
    image: "",
    language: "",
    author: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { courseName, description, price, image, language, author } =
      courseData;
    const res = await fetch(
      "https://coursean-553f1-default-rtdb.firebaseio.com/coursedata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseName,
          description,
          price,
          image,
          language,
          author,
        }),
      }
    );
    console.log(res);
    if (res) {
      setCourseData({
        courseName,
        description,
        price,
        image,
        language,
        author,
      });
      navigate("/");
      alert("we weill review your data soon...");
    }
  };

  return (
    <div className="course-form-container">
      <h2>Hello {userName} to get start please fill the detail.... </h2>
      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={courseData.courseName}
          onChange={handleChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={courseData.description}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={courseData.price}
          onChange={handleChange}
        />

        <label htmlFor="image">Image URL:</label>
        <input
          type="file"
          id="image"
          name="image"
          value={courseData.image}
          onChange={handleChange}
        />

        <label htmlFor="language">Language:</label>
        <input
          type="text"
          id="language"
          name="language"
          value={courseData.language}
          onChange={handleChange}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={courseData.author}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
