import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const {title, company,deadline,_id } = useLoaderData()

    return (
      <>
        <h2 className="text-center text-lg font-bold">Job Details</h2>
        <div className="my-10 space-y-5">
          <h1>Job : {title} </h1>
          <h2>Apply for : {company} </h2>
          <h2>Deadline : {deadline} </h2>
          <Link to={`/jobApply/${_id}`}>
            <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </>
    );
};

export default JobDetails;