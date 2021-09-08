import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";
import { AiOutlineIdcard } from "react-icons/ai";
import correctIcon from "../../img/correct.svg";
import wrongIcon from "../../img/wrong.svg";
import uploadIcon from "../../img/upload.svg";
import { Form, Formik } from "formik";
import { validationSchema } from "../../helpers/verify";
import Formikcontrol from "../../formik/Formikcontrol";
import { verify } from "../../redux/actions/verify";

const requirements = [
  { desc: "Government issued", img: correctIcon },
  { desc: "Orginal full size, unedited documents.", img: correctIcon },
  {
    desc: "Place documents in a single colored background",
    img: correctIcon,
  },
  { desc: "Readable, well-lit, colored images.", img: correctIcon },
  { desc: "No black and white images", img: wrongIcon },
  { desc: "No Edited or Expired documents", img: wrongIcon },
];

const Verify = () => {
  const [showId, setShowId] = useState("");
  const uploadref1 = useRef("");
  const uploadref2 = useRef("");
  const userDetails = useSelector((state) => state.auth.data);
  const dispatch = useDispatch("");

  // dummy data
  const [users, setUsers] = useState({
    email: "sam@gmail.com",
    name: { firstname: "Juwon", lastname: "akande" },
    username: "akanz",
  });

  // Formik initial states
  const initialValues = {
    email: userDetails.email,
    phone_no: "",
    ssn: "",
  };

  // Other states
  const [otherState, setOtherState] = useState({
    id_type: "",
    frontPage: "",
    backPage: "",
  });

  // set state of the ID type
  const handleIdtype1 = () => {
    setShowId(1);
    setOtherState({ ...otherState, id_type: "id_card" });
  };
  const handleIdtype2 = () => {
    setShowId(2);
    setOtherState({ ...otherState, id_type: "d_license" });
  };
  console.log(uploadref1);
  const handleFrontPage = (e) => {
    let files = e.target.files[0];
    // handleFile(files[0]);
    setOtherState({ ...otherState, frontPage: files.name });
    // if (files.length > 0) {
    //   let fileReader = new FileReader();
    //   fileReader.readAsDataURL(files[0]);
    //   fileReader.onload = (e) => {
    //     const result = e.target.result;
    //     setOtherState({ ...otherState, frontPage: result });
    //   };
    // }
  };

  const handleBackPage = (e) => {
    let files = e.target.files[0]; 
    // handleFile(files[0]);
    setOtherState({ ...otherState, backPage: files.name });
    // if (files.length > 0) {
    //   let fileReader = new FileReader();
    //   fileReader.readAsDataURL(files[0]);
    //   fileReader.onload = (e) => {
    //     const result = e.target.result;
    //     setOtherState({ ...otherState, backPage: result });
    //   };
    // }
  };
  const onSubmit = async (values) => {
    dispatch(verify(values));
    dispatch(verify(otherState));
  };

  return (
    <div className="w-9/10 md:w-7/10 mx-auto my-14">
      <div></div>
      <div className="font-semibold text-xl text-blueish">
        <div>Verify Identity</div>
      </div>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div>
              <div className="grid mt-5">
                <input
                  type="text"
                  value={userDetails.username}
                  className="form-input my-2 border-gray-300 rounded"
                  name="email"
                  readOnly
                />
                <Formikcontrol
                  control="input"
                  type="text"
                  name="phone_no"
                  placeholder="414564325"
                />
                <Formikcontrol
                  control="input"
                  type="text"
                  name="ssn"
                  placeholder="Social Security Number"
                />
              </div>

              <div className="">
                <h3 className="my-3 text-gray-600 text-sm">
                  Use a Valid government issued document, Only the following
                  documents will be accepted.
                </h3>

                <div className="grid">
                  <span
                    onClick={handleIdtype1}
                    className="btnTrans cursor-pointer border-gray-300 py-1.5 px-4 text-gray-600 text-xs capitalize hover:border-blue-900 hover:text-blue-800 flex items-center my-2 w-7/10 md:w-4/10"
                  >
                    <AiOutlineIdcard className="h-6 w-6 mr-2" />
                    <span> Government Issued ID Card</span>
                  </span>
                  <span
                    onClick={handleIdtype2}
                    className="btnTrans cursor-pointer border-gray-300 py-1.5 px-4 text-gray-600 text-xs capitalize hover:border-blue-900 hover:text-blue-800 flex items-center my-2 w-7/10 md:w-4/10"
                  >
                    <AiOutlineIdcard className="h-6 w-6 mr-2" />
                    <span> Driver’s License</span>
                  </span>
                  {otherState.id_type !== "" && (
                    <div>
                      <h3>
                        {showId === 1 && "Upload Image of the ID Card"}
                        {showId === 2 && "Upload Image of Driver's License"}
                      </h3>
                      <div className="my-2 md:w-3/5 text-sm text-gray-600">
                        {requirements.map((data, i) => (
                          <div key={i} className="flex items-center my-1">
                            <div className="w-1/50">
                              <img src={data.img} alt="requirements" />
                            </div>
                            <div className="ml-3">{data.desc}</div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-1 text-gray-600">Front page</div>
                      <div className="border-dashed border hover:border-blue-800 border-gray-300 px-4 py-6 mt-2 mb-4 rounded-md flex items-center justify-center">
                        <input
                          className="hidden"
                          type="file"
                          ref={uploadref1}
                          onChange={(e) => handleFrontPage(e)}
                        />
                        <div
                          className=""
                          onClick={() => uploadref1.current.click()}
                        >
                          <img className="w-16" src={uploadIcon} alt="upload" />
                        </div>
                      </div>
                      <div className="mt-1 text-gray-600">Back page</div>
                      <div className="border-dashed border hover:border-blue-800 border-gray-300 px-4 py-6 mt-2 mb-4 rounded-md flex items-center justify-center">
                        <input
                          className="hidden"
                          type="file"
                          ref={uploadref2}
                          onChange={(e) => handleBackPage(e)}
                        />
                        <div
                          className=""
                          onClick={() => uploadref2.current.click()}
                        >
                          <img className="w-16" src={uploadIcon} alt="upload" />
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    disabled={
                      !formik.isValid ||
                      formik.isSubmitting ||
                      !formik.dirty ||
                      otherState.id_type === "" ||
                      otherState.frontPage === "" ||
                      otherState.backPage === ""
                    }
                    className="button w-full my-3 font-semibold"
                  >
                    VERIFY NOW
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Verify;
