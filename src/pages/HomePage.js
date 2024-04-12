import React from "react";
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import LiveSection from "../components/live";



import { AuthContext } from "./Authcontex";
import { useContext } from "react";
const HomePage = () => {
  const user = useContext(AuthContext);
  const { currentUser } = user;
  // const [currentUser, setCurrentUser] = useState()
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     setCurrentUser(user)
  
  //   })

  //   return unsubscribe
  // }, [])
 
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
