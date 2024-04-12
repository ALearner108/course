import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses ,PaymentForm} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import LiveSection from "./components/live";


import VideoContent from "./pages/VideoContent";

import TeacherPage from "./pages/TeacherPage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FirebaseDataFetcher from "./pages/example";

import LiveClass from "./pages/LiveCllass";
import SearchComponent from "./components/SearchComponent";
import SearchResultsPage from "./components/SearchResultsPage";





function App() {
  


  return (
    <BrowserRouter>
      <Navbar />
      {/* {userName ? <Welcome /> : null} */}

      <Sidebar />
      <Routes>
        <Route path="/Livecllass" element={<LiveClass />} />
        <Route path="/teachermode/:content" element={<VideoContent />} />
        <Route path="/teachermode" element={<TeacherPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/fetch" element={<FirebaseDataFetcher />}></Route>
        <Route path="/Checkout" element={<PaymentForm/>}/>
        <Route path="/Cancel" element={<Home/>}/>
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        

       
        {/* <Route path="/search" element={<SearchResult />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
