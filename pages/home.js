import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import SearchJobBar from "../components/ui/SearchJobBar";
import JobList from "../components/ui/jobs/JobList";
import Loader from "../components/ui/Loader";

import axios from "axios";

const home = () => {
  const [jobs, setJobs] = useState(null);
  const [jobSearch, setJobSearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchJobs = async (job, location) => {
    setLoading(true);
    const res = await axios.get(
      `http://api.adzuna.com/v1/api/jobs/in/search/1?app_id=1d34f684&app_key=913f7488439db7e3faca79d7e62feb4a&what=${job}&where=${location}&content-type=application/json`
    );

    console.log(res.data.results);
    setJobs(res.data.results);

    setLoading(false);

    // console.log(job, location);
  };

  useEffect(() => {}, [jobs]);

  const handleSearchClick = (e) => {
    e.preventDefault();

    if (jobSearch !== "" && locationSearch !== "") {
      fetchJobs(jobSearch, locationSearch);
      setJobSearch("");
      setLocationSearch("");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-900  to-cyan-400 min-h-screen w-screen pb-6">
      <Navbar />

      <SearchJobBar
        setJobSearch={setJobSearch}
        jobSearch={jobSearch}
        locationSearch={locationSearch}
        setLocationSearch={setLocationSearch}
        handleSearchClick={handleSearchClick}
      />

      {loading === true ? (
        <Loader loading={true} />
      ) : (
        jobs && <JobList jobs={jobs} />
      )}
    </div>
  );
};

export default home;
