import React, { useState } from "react";

const Salary = () => {
  return (
    <div className="bg-white w-full h-full rounded-r-lg p-6 ">
      <h3 className="text-2xl text-left mt-5 ml-3 font-bold">Predict Salary</h3>
      <hr className="text-left ml-3 w-1/5 mt-3" />
      <form className="mt-5">
        <div className="w-10/12 ml-3 mt-6">
          <label className="text-primary">Gender</label>
          <input
            type="radio"
            id="yes"
            name="gender"
            value="M"
            className="mx-3"
          />
          <label for="yes">Male</label>

          <input
            type="radio"
            id="no"
            name="gender"
            value="F"
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
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">10th Percentage</label>
            <input
              type="number"
              placeholder="Out of 100"
              className=" w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
        </div>
        <div className="flex w-11/12">
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">12th Board</label>
            <input
              type="text"
              placeholder="CBSE (CENTRAL), OTHERS"
              className="w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 px-3">
            <label className="text-primary">12th Percentage</label>
            <input
              type="number"
              placeholder="Out of 100"
              className=" w-full focus:outline-none focus:bg-white h-10 mt-3 p-3 bg-lightgrey border-2 border-lightblue rounded-lg"
            />
          </div>
        </div>

        <div className="w-11/12 ml-3 mt-6">
          <label className="text-primary">12th Stream</label>
          <input
            className="w-11/12 mt-3 p-3 h-10 bg-lightgrey border-2 border-lightblue rounded-lg focus:outline-none focus:bg-white"
            type="text"
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
            className="mx-3"
          />
          <label for="yes">Yes</label>

          <input type="radio" id="no" value="No" name="work" className="mx-3" />
          <label for="no">No</label>
        </div>

        <button
          type="submit"
          className="h-14 w-32 rounded-lg mt-5 mx-auto flex items-center justify-center text-white bg-primary"
        >
          Predict Salary
        </button>
      </form>
    </div>
  );
};

export default Salary;
