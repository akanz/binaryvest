import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AiOutlineLoading } from "react-icons/ai";
import Usercard from "./Usercard";
import Loader from "../otherComps/Loader";

const Users = () => {
  const users = useSelector((state) => state.admin.allUsers);
  const loading = useSelector((state) => state.admin.isLoading);
  const [search, setSearch] = useState("");
  console.log(search);

  const searchedUser = users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.name.firstname.toLowerCase().includes(search.toLowerCase()) ||
      user.name.lastname.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl text-center my-2">All users</h1>
        <input
          type="search"
          className="form-input border-gray-300 rounded"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user"
        />
      </div>

      {loading && <Loader />}
      {users.length > 0 && (
        <div className="mx-auto py-5 grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {searchedUser.map((user) => (
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
