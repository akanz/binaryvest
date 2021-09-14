import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import profilePic from "../../img/profile.svg";
import { Link } from "react-router-dom";
import { getUserById } from "../../redux/actions/admin";
import { VscVerified } from "react-icons/vsc";

const Usercard = ({ username, wallet, ...user }) => {
  const { name, isVerified } = user;
  const dispatch = useDispatch("");

  const getUser = () => {
    dispatch(getUserById(user._id));
  };
  return (
    <Link
      to={`user/${user._id}`}
      onClick={getUser}
      className="transform hover:scale-110 ease-in-out transition duration-300"
    >
      <div className="w-9/10 my-3 md:my-0 mx-auto md:w-full shadow rounded-sm">
        <div className="border-b p-3 border-gray-300">
          <img src={profilePic} alt="" />
        </div>
        <div className="px-3 py-1.5 text-xs">
          <h3>@{username}</h3>
          <h5 className="my-1">
            <span className="mr-1">{name.firstname}</span>
            <span>{name.lastname}</span>
          </h5>
          <h3 className='my-1'>{user._id}</h3>
          <h3 className='my-1'>Wallet Balance: {wallet}</h3>
          <h3>
            {isVerified ? (
              <div className='flex items-center text-green-700'>
                <VscVerified />
                Verified
              </div>
            ) : (
              <div className='text-red-600'>Not Verified</div>
            )}
          </h3>
        </div>
      </div>
    </Link>
  );
};

Usercard.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  email: PropTypes.string,
  username: PropTypes.string.isRequired,
  wallet: PropTypes.number.isRequired,
};

export default Usercard;
