import React, { useState, useContext } from "react";
import PredictionContext from "../../../context/predictions/predictionContext";
import axios from "axios";

const JobCard = ({ job }) => {
  const predictionContext = useContext(PredictionContext);

  const [predictedJobStatus, setPredictedJobStatus] = useState("");

  const { predictedSalary, fetchSalaryWithJobDescription } = predictionContext;

  const format = (str) => {
    const newstr = str.replace("<strong>", "");
    const newnew = newstr.replace("</strong>", "");

    return newnew;
  };

  const handlePredictChances = async () => {
    const data = {
      JobDescription: format(job.description),
      salary: predictedSalary,
    };

    const res = await axios.post("http://0.0.0.0:5000/job", data);

    setPredictedJobStatus(res.data);
  };

  return (
    <div className="bg-white h-auto rounded-lg p-3 text-primary flex flex-col">
      <div>
        <h2 className="text-2xl font-bold">{format(job.title)}</h2>
        <div className="rounded-2xl bg-cyan-400 text-primary border-2 text-sm p-1 font-bold border-primary w-32 mt-3 flex items-center justify-center ">
          {job.created.substring(0, job.created.indexOf("T"))}
        </div>
      </div>
      <div className="w-full mt-3 border-b-2 border-primary"></div>

      <div className="mt-3">
        <div className="text-2xl">{job.company.display_name}</div>

        <div className="flex mt-3">
          <div className="rounded-2xl w-1/4 bg-blue-300 text-white  text-sm p-1 font-bold flex mr-3 items-center justify-center ">
            {job.contract_time === "full_time" ? "Full Time" : "Part Time"}
          </div>
          <div className="rounded-2xl w-1/4 bg-blue-300 text-white text-sm p-1 font-bold flex items-center justify-center">
            {job.category.label}
          </div>
        </div>
      </div>

      <div className="flex mt-3">
        <p className="font-bold mr-3">Location</p>
        <p>{job.location.display_name}</p>
      </div>

      <div className="mt-3">
        <p className="font-bold mr-3">Job Description</p>
        <p className="mt-3">{format(job.description)}</p>
      </div>

      {predictedJobStatus && (
        <div className="border-2 border-green text-darkgreen p-3 mx-auto mt-3">
          <p>
            Your chances of getting selected in this company are{" "}
            {predictedJobStatus.placed === "Not Placed" ? "high" : "low"}
          </p>
          <p>Your predicted salary is around {predictedJobStatus.salary}</p>
        </div>
      )}

      <div className="flex w-full my-auto ">
        <button
          onClick={handlePredictChances}
          className="h-14 w-3/5 mr-3 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Predict your chances
        </button>
        <a
          href={job.redirect_url}
          type="submit"
          target="__blank"
          className="h-14 w-2/5 rounded-lg mt-12 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default JobCard;
