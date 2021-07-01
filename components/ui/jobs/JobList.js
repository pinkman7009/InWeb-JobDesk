import React from "react";
import JobCard from "./JobCard";

const JobList = ({ jobs }) => {
  return (
    <div className="grid grid-cols-3 mt-12 grid gap-6 sm:w-full lg:w-4/5 2xl:w-4/5 mx-auto h-auto">
      {jobs.length === 0 ? (
        <p className="mx-auto text-xl text-white">No results found</p>
      ) : (
        jobs?.map((job) => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
};

export default JobList;
