import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSidebarContext } from "../context/sidebar_context";
import { useCoursesContext } from "../context/courses_context";
import { useSelector } from "react-redux";
import { auth } from "../Firebase-config";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../pages/Authcontex";
const Sidebar = () => {
  const user = useContext(AuthContext);
  const { currentUser, logout } = user;

 
  const userName = useSelector((state) => state.account.username);
  const { categories } = useCoursesContext();
  const nav = useNavigate();
  const { closeSidebar, isSidebarOpen } = useSidebarContext();

  function handlestream() {
    if (!currentUser) nav("/signup");
  }
  function handlelogout() {
    logout();
    nav("/");
  }

  return (
    <SidebarWrapper className={`bg-white ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <button type="button" className="sidebar-close-btn" onClick={() => closeSidebar()}>
        <h4>x</h4>
        <MdClose />
      </button>
      <div className="sidebar-content">
      {currentUser && <div>{`Hi ${currentUser.email}`}</div>}
        <h6 className="fs-18">Top Categories</h6>
        <ul className="sidebar-category">
          {categories.map((category, idx) => {
            return (
              <li className="sidebar-link-item fw-5" key={idx}>
                <Link to={`category/${category}`}>
                  {category.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </ul>
        {!currentUser && (
          <button onClick={handlestream} className="section rel">
            <h4 className="title s24 fontb">Get Started</h4>
          </button>
        )}
        {currentUser && (
          <button onClick={handlelogout} className="section rel">
            <h4 className="title s24 fontb">LogOut</h4>
          </button>
        )}
      
        
      </div>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  z-index: 10;
  height: 100%;
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 8px;
  transform: translateX(100%);
  transition: var(--transition);

  &.show-sidebar {
    transform: translateX(0);
  }

  .sidebar-close-btn {
    position: absolute;
    right: 20px;
    top: 20px;
    border: 2px solid var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transition: all 300ms ease-in-out;
  }

  .sidebar-close-btn:hover {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }

  .sidebar-content {
    margin-top: 50px;

    h6 {
      margin-bottom: 16px;
    }

    .sidebar-link-item {
      font-size: 15px;
      margin-bottom: 12px;
      transition: var(--transition);

      &:hover {
        transform: translateX(6px);
        text-decoration: underline;
      }
    }
  }
`;

export default Sidebar;
