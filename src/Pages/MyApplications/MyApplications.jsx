import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';

const MyApplications = () => {
    const {user} = useAuth()
    const [jobs, setJobs]= useState()
    useEffect(()=>{
        fetch(`http://localhost:3000/job_application?${user?.email}`)

        .then(res => res.json())
        .then(data =>{
            setJobs(data)
           
            console.log(data, ' data are here ')
        })
    },[user.email])
    return (
      <>
        <h2 className="text-5xl">My Applications {jobs?.length} </h2>

        <div className="overflow-x-auto mt-3">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {jobs &&
                jobs?.map((job, index) => (
                  <tr key={job._id}>
                    <th>{index + 1}</th>
                    <td>{job.title}</td>
                    <td>   <img className='w-12' src={job.company_logo} alt="" /> </td>
                    <td>   {job.location} </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default MyApplications;