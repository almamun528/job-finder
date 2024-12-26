import React, { useEffect, useState } from 'react';
import useAuth from '../../CustomHooks/useAuth';

const MyPostedJobs = () => {
    const [jobs, setJobs]= useState([])
const {user}= useAuth()

    useEffect(()=>{
        fetch(`http://localhost:3000/jobs?email=${user.email}`)
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            setJobs(data)
        })
    },[user.email])
    return (
      <>
        <h2 className="text-2xl text-center my-4">
          Jobs You Posted {jobs?.length}{" "}
        </h2>
        <br />
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Deadline</th>
                <th>Company</th>
                <th>Total Application</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {jobs &&
                jobs?.map((job, idex) => (
                  <tr key={idex}>
                    <th>{idex + 1}</th>
                    <td> {job.title} </td>
                    <td>{job.applicationDeadline}</td>
                    <td>{job.company}</td>
                    <td>20</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default MyPostedJobs;