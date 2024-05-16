import { FaBarsStaggered } from "react-icons/fa6";
import React from "react";
import avatar from "../../assets/icons/avatar.svg";
import "./adminHeader.scss";

const AdminHeader = ({ setClose }) => {
  return (
    <div className="admin__header">
      <button onClick={() => setClose((p) => !p)}>
        <FaBarsStaggered />
      </button>
      <div className="admin__header__right">
        <p>Jones Ferdinand</p>
        <img src={avatar} alt="img" />
      </div>
    </div>
  );
};

export default AdminHeader;
