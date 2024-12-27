import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/jobs")
        .then((res) => res.json())
        .then((data) => {
          setJobs(data);
        });
    }, []);

  
  return (
    <>
      <section className="my-10">
        <div className="text-center">
          <h1 className="my-2 text-3xl font-bold">Jobs Are Waiting For you!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            qui nesciunt quod obcaecati, veritatis expedita asperiores
            necessitatibus unde facilis fugit!
          </p>
        </div>
        {/* jobs map */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
                jobs && jobs?.map(job=> <JobCard  job={job} key={job._id}   />  )
            }
        </div>
      </section>
    </>
  );
};

export default HotJobs;
