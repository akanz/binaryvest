import React from "react";
import { useSelector } from "react-redux";
import Errormessage from "../otherComps/Errormessage";
import Loader from "../otherComps/Loader";
import Successmessage from "../otherComps/Successmessage";
import Depcard from "./Depcard";

const AllDeposits = () => {
  const deposit = useSelector((state) => state.deposit);
  const message = useSelector((state) => state.message);
  const sortedBydate = [...deposit.allDeposits].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div>
      <h3 className="text-3xl text-center text-gray-700 my-3">
        Deposit Requests
      </h3>
      {deposit.isLoading && <Loader />}
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}
      {sortedBydate.length > 0 && (
        <div className="p-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBydate.length > 0 &&
            sortedBydate
              .filter((req) => req.status !== "accepted")
              .map((req) => <Depcard key={req._id} {...req} />)}
        </div>
      )}
    </div>
  );
};

export default AllDeposits;
