import React, { useContext, useEffect } from "react";
import { Navbar } from "./Navbar";
import { JobCard } from "./JobCard";
import { GlobalContext } from "../context/GlobalState";

export const JobList = ({ work, defLogo }) => {
  let { jobs, getJobs, resetJobs } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => resetJobs();
  }, []);

  return (
    <div className="job-list">
      <Navbar />
      <h1 className="text-centered color-primary">{work}</h1>
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} defLogo={defLogo} />
      ))}
    </div>
  );
};
