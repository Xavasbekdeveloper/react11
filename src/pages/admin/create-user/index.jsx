import React, { useState } from "react";
import "./createUsers.scss";
import axios from "../../../api";
import { toast } from "react-toastify";

let initialState = {
  firstName: "John",
  lastName: "Doe",
  age: 23,
  gender: "male",
};

const CreateUser = () => {
  const [newUser, setNewUser] = useState(initialState);

  const handleCreate = (e) => {
    e.preventDefault();

    axios
      .post("users", newUser)
      .then((res) => {
        setNewUser(res);
        toast.success("added successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="user">
      <h2 className="user__title">Create User</h2>

      <form onSubmit={handleCreate} action="" className="user__form">
        <input
          value={newUser.firstName}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, firstName: e.target.value }))
          }
          type="text"
        />
        <input
          value={newUser.lastName}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, lastName: e.target.value }))
          }
          type="text"
        />
        <input
          value={newUser.age}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, age: +e.target.value }))
          }
          type="text"
        />
        <input
          value={newUser.gender}
          onChange={(e) =>
            setNewUser((prev) => ({ ...prev, gender: e.target.value }))
          }
          type="text"
        />
        <button>Create</button>
      </form>
    </section>
  );
};

export default CreateUser;
