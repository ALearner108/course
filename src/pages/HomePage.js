import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import LiveSection from "../components/live";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { auth } from "../Firebase-config";
import { useState } from "react";
import { AuthContext } from "./Authcontex";
import { useContext } from "react";
const HomePage = () => {
  const user = useContext(AuthContext);
  const { currentUser, logout } = user;
  // const [currentUser, setCurrentUser] = useState()
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setCurrentUser(user)
  
  //   })

  //   return unsubscribe
  // }, [])
 
  const userName = useSelector((state) => state.account.username);
  return (
    <div className="holder">
      <Hero />
      
      <CoursesList />
      <CategoriesList />
      {currentUser && <LiveSection />}
      <Footer />
    </div>
  );
};

export default HomePage;
