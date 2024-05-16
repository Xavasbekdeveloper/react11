import React from "react";
import useFetch from "../../../hooks/useFetch";
import UsersInfo from "../../../components/users-info";

const ManageUser = () => {
  let { data, loading, error } = useFetch("/users");
  return (
    <div>
      <UsersInfo isAdmin={true} data={data} />
    </div>
  );
};

export default ManageUser;
