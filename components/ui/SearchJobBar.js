import React, { useState } from "react";
import magnify from "../../public/magnify.svg";
import locationPic from "../../public/location.svg";
import Image from "next/image";

const SearchJobBar = ({
  jobSearch,
  locationSearch,
  setJobSearch,
  setLocationSearch,
  handleSearchClick,
}) => {
  return (
    <div className="h-16 w-3/5 bg-white p-3 mx-auto rounded-lg flex items-center justify-between">
      <div className="w-3/5 h-full flex items-center">
        <Image width={25} height={25} src={magnify} alt="magnify" />
        <input
          type="text"
          className="h-full w-full focus:outline-none ml-3 text-blue text-lg"
          value={jobSearch}
          onChange={(e) => setJobSearch(e.target.value)}
          placeholder="Search job"
        />
      </div>
      <div className="h-full border-grey border-r-2"></div>

      <div className="w-2/5 ml-3 h-full flex items-center">
        <div className="w-3/4 h-full flex items-center">
          <Image width={25} height={25} src={locationPic} alt="magnify" />
          <input
            type="text"
            className="h-full w-full focus:outline-none ml-3 text-blue text-lg"
            placeholder="location"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </div>

        <button
          className="h-full w-1/4 rounded-lg flex items-center justify-center text-white bg-primary"
          onClick={handleSearchClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchJobBar;
