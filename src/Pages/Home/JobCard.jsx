import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const {
    title,
    _id,
    salaryRange,
    location,
    company_logo,
    company, 
    requirements,
    description,
  } = job;
  return (
    <>
      <div className="card bg-base-100 shadow-xl mt-36">
        <figure>
          <img className="w-40" src={company_logo} alt="Shoes" />
        </figure>
        <div className="flex mt-2 items-center justify-center gap-2">
          <p>
            {" "}
            <CiLocationOn />{" "}
          </p>
          <p> {location} </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p> {description} </p>
          <div className="flex gap-2 items-center justify-center flex-wrap">
            {requirements &&
              requirements.map((skill, idx) => (
                <p
                  key={idx}
                  className="border  rounded-md text-center px-2 hover:bg-gray-300 hover:text-black"
                >
                  {skill}
                </p>
              ))}
          </div>
          <div className="card-actions justify-end">
            <p>
              Salary : {salaryRange.min} - {salaryRange.max}{" "}
              {salaryRange.currency}{" "}
            </p>
            <Link className="my-4" to={`jobs/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
