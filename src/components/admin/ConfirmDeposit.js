import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmDeposit } from "../../redux/actions/admin";

const ConfirmDeposit = () => {
  const user = useSelector((state) => state.auth.data);
  const deposit = useSelector((state) => state.deposit);
  const dispatch = useDispatch("");

  const [pckg, setPckg] = useState({
    packageOption: "",
    amount: 0,
  });
  console.log(pckg);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(confirmDeposit(pckg));
  };

  return (
    <div>
      <form className="grid" onSubmit={onSubmit}>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">User E-mail</label>
          <input
            className="form-input border-gray-300 rounded"
            value={user.email}
            readOnly
          />
        </div>

        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">Package</label>
          <input
            className="form-input border-gray-300 rounded"
            value={pckg.packageOption}
            onChange={(e) =>
              setPckg({ ...pckg, packageOption: e.target.value })
            }
            name={pckg.packageOption}
          />
        </div>
        <div className="my-3 grid">
          <label className="mb-1 text-gray-500 mx-1">Amount</label>
          <input
            className="form-input border-gray-300 rounded"
            value={pckg.amount}
            onChange={(e) => setPckg({ ...pckg, amount: e.target.value })}
            name={pckg.amount}
          />
        </div>

        <div className="grid md:grid-cols-2 place-items-center">
          <button
            type="submit"
            className="button font-semibold my-5 w-full md:w-4/5 uppercase"
          >
            authorize deposit
          </button>
          <button className="font-semibold my-5 w-full hover md:w-4/5 uppercase bg-darkblue text-white p-2 rounded">
            deny
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmDeposit;
