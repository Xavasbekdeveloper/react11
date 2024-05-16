import React, { memo } from "react";
import UsersInfo from "../../components/users-info";
import useFetch from "../../hooks/useFetch";

const Users = () => {
  let { data, loading, error } = useFetch("/users");
  return (
    <>
      <UsersInfo data={data} />
    </>
  );
};

export default memo(Users);
