import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createPlan } from "../../../redux/actions/admin";

const Plan = () => {

  const dispatch = useDispatch("");
  const [plan, setPlan] = useState({
    name: "",
    roi: null,
    minAmount: null,
    maxAmount: null,
  });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPlan(plan));
  };
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Plan Name"
            onChange={(e) => setPlan({ ...plan, name: e.target.value })}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="ROI%"
            onChange={(e) => setPlan({ ...plan, roi: e.target.value })}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Minimum amount"
            onChange={(e) => setPlan({ ...plan, minAmount: e.target.value })}
          />
        </div>
        <div className="my-4">
          <input
            type="text"
            className="form-input w-full border-gray-400 rounded"
            placeholder="Maximum amount"
            onChange={(e) => setPlan({ ...plan, maxAmount: e.target.value })}
          />
        </div>
        <div className="my-5 text-right">
          <button
            disabled={
              plan.name === "" ||
              !plan.roi ||
              isNaN(plan.roi) ||
              plan.minAmount < 200 ||
              !plan.minAmount ||
              !plan.maxAmount
            }
            className="button"
          >
            CREATE PLAN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Plan;
