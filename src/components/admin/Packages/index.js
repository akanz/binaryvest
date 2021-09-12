import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlans, updatePlan } from "../../../redux/actions/admin";
import Loader from "../../otherComps/Loader";

const Packages = () => {
  const dispatch = useDispatch("");
  const admin = useSelector((state) => state.admin);
  const [packages, setPackages] = useState("");
  const [ID, setID] = useState(null);
  const [editPckg, seteditPckg] = useState({});

  useEffect(() => {
    dispatch(getPlans());
  }, []);
  useEffect(() => {
    setPackages(admin.allPackages);
  }, [admin]);

  const handleChange = (e) => {};
  console.log(packages);
  console.log(editPckg)

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-3xl text-center my-3">All plans</h2>
      {admin.isLoading && <Loader />}
      <div className="p-5 bg-skyblue rounded">
        {!admin.isLoading &&
          packages.length > 0 &&
          packages.map((option) => (
            <div
              className="grid md:grid-cols-4 gap-2 border-b border-gray-300  p-2 my-2 text-xl"
              key={option._id}
            >
              <div>{option.name}</div>
              <div>{option.roi}</div>
              <div>
                {option.minAmount} - {option.maxAmount}
              </div>
              <div className="">
                <button
                  style={{ padding: "10px" }}
                  onClick={() => setID(option._id)}
                  className="button text-xs capitalize"
                >
                  edit package
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="shadow rounded p-5 my-8">
        {ID && (
          <form onSubmit={onSubmit}>
            {admin.allPackages
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
              ))}
          </form>
        )}
      </div>
    </div>
  );
};

export default Packages;
