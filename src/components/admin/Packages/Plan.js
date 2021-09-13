import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { createPlan } from "../../../redux/actions/admin";
import { clearMessage } from "../../../redux/actions/message";
import BtnLoader from "../../otherComps/BtnLoader";
import Errormessage from "../../otherComps/Errormessage";
import Successmessage from "../../otherComps/Successmessage";

const Plan = () => {
  const admin = useSelector((state) => state.admin);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch("");
  const history = useHistory();
  const [plan, setPlan] = useState({
    name: "",
    roi: "",
    minAmount:  "",
    maxAmount: "",
  });

  const onSubmit = async (e) => {
    dispatch(clearMessage());
    e.preventDefault();
    dispatch(createPlan(plan));
    setTimeout(() => {
      dispatch(clearMessage())
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlan({ ...plan, [name]: value });
  };
 
  return (
    <div>
      {!admin.isLoading &&
        admin.package.length > 0 &&
        message.status === 200 && (
          <Successmessage>{message.message}</Successmessage>
        )}

      {!admin.isLoading && message.status === 400 && (
        <Errormessage>{message.message}</Errormessage>
      )}
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Plan Name"
            name="name"
            value={plan.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="ROI%"
            name="roi"
            value={plan.roi}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Minimum amount"
            name="minAmount"
            value={plan.minAmount}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Maximum amount"
            name="maxAmount"
            value={plan.maxAmount}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="my-5 text-right">
          <button
            disabled={
              plan.name === "" ||
              plan.roi === "" ||
              isNaN(plan.roi) ||
              plan.minAmount < 200 ||
              plan.minAmount === "" ||
              isNaN(plan.minAmount) ||
              plan.maxAmount === "" ||
              isNaN(plan.maxAmount)
            }
            className="button uppercase flex items-center"
          >
            {admin.isLoading && <BtnLoader />}
            create plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default Plan;
