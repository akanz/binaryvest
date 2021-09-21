import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loader from "../otherComps/Loader";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.data);
  const [users, setUsers] = useState({
    email: "sam@gmail.com",
    name: { firstname: "Juwon", lastname: "akande" },
    username: 'akanz',
  });
  

  if (!user) {
    return <Loader />
  }
  return (
    <div className="flex">
      <Sidebar user={user? user: users} />
      <Main user={user? user: users} />
    </div>
  );
};

export default Dashboard;
