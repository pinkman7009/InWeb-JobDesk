import React, { useState, useContext } from "react";
import PredictionContext from "../../context/predictions/predictionContext";
import { useRouter } from "next/router";
const Salary = () => {
  const predictionContext = useContext(PredictionContext);

  const [gender, setGender] = useState("");
  const [sscp, setSscp] = useState("");
  const [sscb, setSscb] = useState("");
  const [hscp, setHscp] = useState("");
  const [hscb, setHscb] = useState("");
  const [hscs, setHscs] = useState("");
  const [workex, setWorkex] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { fetchPredictedSalary, predictedSalary } = predictionContext;
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      gender === "" ||
      sscp === "" ||
      sscb === "" ||
      hscp === "" ||
      hscb === "" ||
      hscs === "" ||
      workex === ""
    )
      setErrorMessage("Please enter all fields");
    else {
      const formdata = {
        gender,
        sscp: parseInt(sscp),
        sscb,
        hscp: parseInt(hscp),
        hscb,
        hscs,
        workex,
      };

      fetchPredictedSalary(formdata);

      router.push("/home");
    }
  };
  return (
    <div className="bg-white w-full h-full rounded-r-lg p-6 ">
      <h3 className="text-2xl text-left mt-5 ml-3 font-bold">Predict Salary</h3>
      <hr className="text-left ml-3 w-1/5 mt-3" />

      <div className="w-full flex justify-center items-center">
        {errorMessage && (
          <p className="text-red text-lg mt-6">{errorMessage}</p>
        )}
      </div>
      <form className="mt-5">
        <div className="w-10/12 ml-3 mt-6">
          <label className="text-primary">Gender</label>
          <input
            type="radio"
            id="yes"
            name="gender"
            value="Male"
            onChange={(e) => setGender(e.target.value)}
            className="mx-3"
          />
          <label for="yes">Male</label>

          <input
            type="radio"
            id="no"
            name="gender"
            value="Female"
            onChange={(e) => setGender(e.target.value)}
            className="mx-3"
          />
          <label for="no">Female</label>
        </div>
        <div className="flex w-11/12">
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">10th Board</label>
            <input
              type="text"
              placeholder="CBSE (CENTRAL), OTHERS"
              value={sscb}
              onChange={(e) => setSscb(e.target.value)}
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">10th Percentage</label>
            <input
              type="number"
              placeholder="Out of 100"
              value={sscp}
              onChange={(e) => setSscp(e.target.value)}
              className=" w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
        </div>
        <div className="flex w-11/12">
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">12th Board</label>
            <input
              type="text"
              value={hscb}
              onChange={(e) => setHscb(e.target.value)}
              placeholder="CBSE (CENTRAL), OTHERS"
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">12th Percentage</label>
            <input
              type="number"
              placeholder="Out of 100"
              value={hscp}
              onChange={(e) => setHscp(e.target.value)}
              className=" w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
        </div>

        <div className="w-11/12 ml-3 mt-6">
          <label className="text-primary">12th Stream</label>
          <input
            className="w-11/12 mt-3 p-3 h-10 bg-lightgrey border-2 border-lightblue rounded-lg focus:outline-none focus:bg-white"
            type="text"
            value={hscs}
            onChange={(e) => setHscs(e.target.value)}
            placeholder="Commerce, Science, Arts"
          />
        </div>

        <div className="w-11/12 ml-3 mt-6">
          <label className="text-primary">Work Exp: </label>
          <input
            type="radio"
            id="yes"
            value="Yes"
            name="work"
            onChange={(e) => setWorkex(e.target.value)}
            className="mx-3"
          />
          <label for="yes">Yes</label>

          <input
            type="radio"
            id="no"
            onChange={(e) => setWorkex(e.target.value)}
            value="No"
            name="work"
            className="mx-3"
          />
          <label for="no">No</label>
        </div>

        <button
          onClick={handleSubmit}
          className="h-14 w-32 rounded-lg mt-5 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Continue
        </button>
      </form>

      {/* {predictedSalary && (
        <p className="text-primary text-xl mt-6">
          Your predicted salary is{" "}
          <span className="font-bold">{predictedSalary}</span>
        </p>
      )} */}
    </div>
  );
};

export default Salary;
