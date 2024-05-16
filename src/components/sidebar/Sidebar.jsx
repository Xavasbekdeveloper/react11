import React, { memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { IoMdCube } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaUsers } from "react-icons/fa6";
import { IoInvertModeOutline, IoLogOutOutline } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <section className="sidebar">
      <h2 className="sidebar__logo">
        <Link to={"/"}>
          <IoMdCube />
        </Link>
        <span>Dashboard</span>
      </h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-product"}>
            <AiFillProduct />
            <span>Create Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"create-user"}>
            <FaUsers />
            <span>Create User</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-product"}>
            <AiFillProduct />
            <span>Manage Product</span>
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className={"sidebar__link"} to={"manage-user"}>
            <FaUsers />
            <span>Manage User</span>
          </NavLink>
        </li>
      </ul>
      <div className="sidebar__btns">
        <button>
          <IoInvertModeOutline />
          <span>Change Mode</span>
        </button>
        <button onClick={handleLogOut}>
          <IoLogOutOutline />
          <span>Log Out</span>
        </button>
      </div>
    </section>
  );
};

export default memo(Sidebar);
