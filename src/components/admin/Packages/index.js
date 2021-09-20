import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import {
  deletePlan,
  getPlan,
  getPlans,
  updatePlan,
} from "../../../redux/actions/admin";
import { clearMessage } from "../../../redux/actions/message";
import BtnLoader from "../../otherComps/BtnLoader";
import Errormessage from "../../otherComps/Errormessage";
import Loader from "../../otherComps/Loader";
import Successmessage from "../../otherComps/Successmessage";

const Packages = () => {
  const dispatch = useDispatch("");
  const admin = useSelector((state) => state.admin);
  const message = useSelector((state) => state.message);
  const [packages, setPackages] = useState("");
  const [ID, setID] = useState(null);
  const [confDelete, setConfDelete] = useState("");

  const [editPckg, seteditPckg] = useState({
    name: "",
    roi: "",
    minAmount: "",
    maxAmount: "",
  });
 const sortByRoi = [...packages].sort((a,b)=> a.roi - b.roi) 

  useEffect(() => {
    dispatch(clearMessage())
    dispatch(getPlans())
  }, []);

  useEffect(() => {
    setPackages(admin.allPackages);
  }, [admin]);

  useEffect(() => {
    seteditPckg(admin.package);
  }, [admin.package]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    seteditPckg({ ...editPckg, [name]: value });
  };

  const onSubmit = (e) => {
    dispatch(clearMessage());
    e.preventDefault();
    console.log({ id: ID, ...editPckg });
    dispatch(updatePlan({ id: ID, ...editPckg }));
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };

  const handleGetPlan = (id) => {
    dispatch(clearMessage());
    dispatch(getPlan(id));
    setID(id);
    seteditPckg({ ...editPckg, ...admin.package });
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };
  const handleDeletePlan = (id) => {
    dispatch(clearMessage());
    dispatch(deletePlan(id));
    console.log(id);
    setTimeout(() => {
      setConfDelete("");
    }, 500);
    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-3">All plans</h2>
      {admin.isLoading && <Loader />}
      <div className="p-5 bg-skyblue rounded">
        {!admin.isLoading && message.status === 200 && (
          <Successmessage>{message.message}</Successmessage>
        )}
        {!admin.isLoading && message.status === 400 && (
          <Errormessage>{message.message}</Errormessage>
        )}
        <div className="grid grid-cols-4 gap-2 border-b border-gray-300  p-2 my-2 md:text-xl">
          <div>Name</div>
          <div>ROI</div>
          <div>Min - Max</div>
          <div>Options</div>
        </div>
        {!admin.isLoading &&
          packages.length > 0 &&
          sortByRoi.map((option) => (
            <div
              className="grid grid-cols-4 gap-2 border-b border-gray-300  p-2 my-2 md:text-xl"
              key={option._id}
            >
              <div>{option.name}</div>
              <div>{option.roi}</div>
              <div>
                {option.minAmount} - {option.maxAmount}
              </div>
              <div>
                <div className="flex items-center justify-evenly">
                  <span
                    style={{ padding: "10px" }}
                    onClick={() => handleGetPlan(option._id)}
                    className="p-2 bg-lightgreen rounded text-xs capitalize"
                  >
                    <FiEdit />
                  </span>
                  <span
                    onClick={() => setConfDelete(option.name)}
                    className="p-2 bg-red-600 rounded text-white text-xs capitalize"
                  >
                    <AiOutlineDelete />
                  </span>
                </div>
                {confDelete === option.name && (
                  <div className="text-xs font-semibold text-center p-2 mt-3 shadow text-gray-500">
                    <h3>
                      Delete <b>{option.name} </b> package?
                    </h3>
                    <div className="flex justify-between items-center p-2">
                      <span
                        onClick={() => setConfDelete("")}
                        className="bg-red-600 text-white confirmDelete"
                      >
                        <IoCloseOutline className="h-3 w-3" />
                      </span>
                      <span
                        onClick={() => handleDeletePlan(option._id)}
                        className="bg-lightgreen text-green-700 confirmDelete"
                      >
                        <GiConfirmed className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="shadow rounded p-5 my-8">
        {ID && (
          <form onSubmit={onSubmit}>
            {/* {admin.allPackages
              .filter((pckg) => pckg._id === ID)
              .map((inp) => (
                <div key={inp._id}>
                  <div className="text-2xl my-3">{inp.name}</div>
                  <div>
                    <label>ROI</label>
                    <input
                      type="text"
                      className="form-input my-2 w-full rounded border-gray-300"
                      name="roi"
                      onChange={(e) => handleChange(e)}
                      value={`${inp.roi}%`}
                    />
                  </div>
                  <div>
                    <label>Min amount</label>
                    <input
                      type="text"
                      className="form-input my-2 w-full rounded border-gray-300"
                      name="minAmount"
                      onChange={(e) => handleChange(e)}
                      value={`$${inp.minAmount}`}
                    />
                  </div>
                  <div>
                    <label>Max amount</label>
                    <input
                      type="text"
                      className="form-input my-2 w-full rounded border-gray-300"
                      name="maxAmount"
                      onChange={(e) => handleChange(e)}
                      value={`$${inp.maxAmount}`}
                    />
                  </div>
                  <button className="button my-3 px-4 py-1">
                    update package
                  </button>
                </div>
              ))} */}

            <div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  className="form-input my-2 w-full rounded border-gray-300"
                  name="name"
                  onChange={(e) => handleChange(e)}
                  value={editPckg.name}
                />
              </div>
              <div>
                <label>ROI</label>
                <input
                  type="text"
                  className="form-input my-2 w-full rounded border-gray-300"
                  name="roi"
                  onChange={(e) => handleChange(e)}
                  value={editPckg.roi}
                />
              </div>
              <div>
                <label>Min amount</label>
                <input
                  type="text"
                  className="form-input my-2 w-full rounded border-gray-300"
                  name="minAmount"
                  onChange={(e) => handleChange(e)}
                  value={editPckg.minAmount}
                />
              </div>
              <div>
                <label>Max amount</label>
                <input
                  type="text"
                  className="form-input my-2 w-full rounded border-gray-300"
                  name="maxAmount"
                  onChange={(e) => handleChange(e)}
                  value={editPckg.maxAmount}
                />
              </div>
              <button className="button my-3 px-4 py-1 flex items-center">
                {admin.isLoading && <BtnLoader />}
                update package
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Packages;
