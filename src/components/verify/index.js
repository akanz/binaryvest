import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.us";
import { AiOutlineIdcard } from "react-icons/ai";
import correctIcon from "../../img/correct.svg";
import wrongIcon from "../../img/wrong.svg";
import uploadIcon from "../../img/upload.svg";
import { Form, Formik } from "formik";
import { validationSchema, initialValues } from "../../helpers/verify";
import Formikcontrol from "../../formik/Formikcontrol";
import { verify } from "../../redux/actions/verify";
import { MdClose } from "react-icons/md";
import Successmessage from "../otherComps/Successmessage";
import Errormessage from "../otherComps/Errormessage";
import BtnLoader from "../otherComps/BtnLoader";
import { clearMessage } from "../../redux/actions/message";

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
  const userDetails = useSelector((state) => state.auth.data);
  const message = useSelector((state) => state.message);
  const ver = useSelector((state) => state.verify);
  const dispatch = useDispatch("");

  // Other states
  const [otherState, setOtherState] = useState({
    username: userDetails.username,
    id_type: "",
    frontPage: null,
    backPage: null,
  });
  const [imgPreview, setImgPreview] = useState({
    frontPage: null,
    backPage: null,
  });
  const [uploadErr, setuploadErr] = useState({
    front: false,
    back: false,
  });
console.log(otherState)


  // set state of the ID type
  const handleFrontPage = (e) => {
    const selected = e.target.files[0];

    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/heic",
      "application/pdf",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setOtherState({ ...otherState, frontPage: selected });
        setImgPreview({ ...imgPreview, frontPage: reader.result });
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("File not supported");
      setuploadErr({ ...uploadErr, front: true });
    }
  };
  const handleBackPage = (e) => {
    const selected = e.target.files[0];
    const ALLOWED_TYPES = [
      "image/png",
      "image/jpeg",
      "image/heic",
      "application/pdf",
    ];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setOtherState({ ...otherState, backPage: selected });
        setImgPreview({ ...imgPreview, backPage: reader.result });
      };
      reader.readAsDataURL(selected);
    } else {
      console.log("File not supported");
      setuploadErr({ ...uploadErr, back: true });
    }
  };
  const handleIdtype1 = () => {
    setShowId(1);
    setOtherState({ ...otherState, id_type: "id_card" });
  };
  const handleIdtype2 = () => {
    setShowId(2);
    setOtherState({ ...otherState, id_type: "d_license" });
  };

  const onSubmit = async (values) => {
    const imgData = new FormData();
    imgData.append("file", otherState.frontPage);

    const imgData2 = new FormData();
    imgData2.append("file", otherState.backPage);
    dispatch(clearMessage());
    const data = { ...values, ...otherState, imgData, imgData2 };
    console.log(data);
    dispatch(verify(data));

    setTimeout(() => {
      dispatch(clearMessage());
    }, 3000);
  };

  return (
    <div className="w-9/10 md:w-7/10 mx-auto my-14">
      <div></div>
      <div className="font-semibold text-xl text-blueish">
        <div>Verify Identity</div>
      </div>
      {message.status === 200 && (
        <Successmessage>{message.message}</Successmessage>
      )}
      {message.status === 400 && <Errormessage>{message.message}</Errormessage>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div>
              <div className="grid mt-5">
                <h3 className="text-2xl text-gray-600">
                  @{userDetails.username}
                </h3>
                <Formikcontrol
                  control="input"
                  type="text"
                  name="phone_no"
                  placeholder="(414) 564-0325"
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
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="mt-1 text-gray-600">Front page</div>
                          <div className="border-dashed border hover:border-blue-800 border-gray-300 p-2 mt-2 mb-4 rounded-md flex items-center justify-center">
                            {!otherState.frontPage && (
                              <div className="p-4">
                                <label htmlFor="customFile">
                                  <img
                                    className="w-16"
                                    src={uploadIcon}
                                    alt="upload"
                                  />
                                </label>
                                <input
                                  className="hidden"
                                  id="customFile"
                                  type="file"
                                  onChange={(e) => handleFrontPage(e)}
                                />
                              </div>
                            )}

                            {uploadErr.front && (
                              <div className="bg-red-600 text-white rounded p-2">
                                File Not Supported
                              </div>
                            )}
                            <div className="grid justify-items-center">
                              {otherState.frontPage && (
                                <div
                                  className="w-40 h-40"
                                  style={{
                                    background: otherState.frontPage
                                      ? `url("${imgPreview.frontPage}") no-repeat center/contain`
                                      : "",
                                  }}
                                ></div>
                              )}
                              {otherState.frontPage && (
                                <div
                                  onClick={() => {
                                    setOtherState({
                                      ...otherState,
                                      frontPage: null,
                                    });
                                    setuploadErr({
                                      ...uploadErr,
                                      front: false,
                                    });
                                  }}
                                  className="bg-red-600 w-2/10 mx-0 px-2 flex justify-center items-center my-2 rounded-full text-white"
                                >
                                  <MdClose className="w-8 h-8" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="mt-1 text-gray-600">Back page</div>
                          <div className="border-dashed border hover:border-blue-800 border-gray-300 p-2 mt-2 mb-4 rounded-md flex items-center justify-center">
                            {!otherState.backPage && (
                              <div className="p-4">
                                <label htmlFor="customFile2">
                                  <img
                                    className="w-16"
                                    src={uploadIcon}
                                    alt="upload"
                                  />
                                </label>
                                <input
                                  className="hidden"
                                  id="customFile2"
                                  type="file"
                                  onChange={(e) => handleBackPage(e)}
                                />
                              </div>
                            )}
                            {uploadErr.back && (
                              <div className="bg-red-600 text-white rounded p-2">
                                File Not Supported
                              </div>
                            )}
                            <div className="grid justify-items-center">
                              {otherState.backPage && (
                                <div
                                  className="w-40 h-40"
                                  style={{
                                    background: otherState.backPage
                                      ? `url("${imgPreview.backPage}") no-repeat center/contain`
                                      : "",
                                  }}
                                ></div>
                              )}
                              {otherState.backPage && (
                                <div
                                  onClick={() => {
                                    setOtherState({
                                      ...otherState,
                                      backPage: null,
                                    });
                                    setuploadErr({
                                      ...uploadErr,
                                      back: false,
                                    });
                                  }}
                                  className="bg-red-600 w-2/10 mx-0 px-2 flex justify-center items-center my-2 rounded-full text-white"
                                >
                                  <MdClose className="w-8 h-8" />
                                </div>
                              )}
                            </div>
                          </div>
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
                      !otherState.frontPage ||
                      !otherState.backPage
                    }
                    className="button flex justify-center items-center w-full my-3 font-semibold"
                  >
                    {ver.isLoading && <BtnLoader />}
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
