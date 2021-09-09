import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import Usercard from "./Usercard";
import Loader from "../otherComps/Loader";

const Users = () => {
  const users = useSelector((state) => state.admin.allUsers);
  const loading = useSelector((state) => state.admin.isLoading);
  return (
    <div>
      <h1 className="text-2xl text-center my-2">All users</h1>
      {loading && (
          <Loader />
      )}
      {users.length > 0 && (
        <div className="mx-auto py-5 grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {users.map((user) => (
            <Usercard
              username={user.username}
              {...user}
              wallet={user.wallet}
              key={user._id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Users;
