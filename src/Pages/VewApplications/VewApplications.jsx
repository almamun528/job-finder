import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VewApplications = () => {
    const application = useLoaderData()
    // const handleUpdateStatus = (e, id)=>{
    //     e.preventDefault()
    //     const data ={
    //         status: e.target.value 

    //     }
    //     // send data to backend 
    //     fetch(``,{
    //         method:"PATCH",
    //         headers:{'content-type':'application/json'},
    //         body: JSON.stringify(data)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    //     console.log('this id status need to update->  ', id)
    // }
    return (
      <>
        <h2 className="text-2xl text-center my-2">Users Are Applied {application.length} </h2>

        <div  className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Linkedin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {application &&
                application?.map((applied, idx) => (
                  <tr key={applied._id}>
                    <th>{idx + 1}</th>
                    <td> {applied.applicant} </td>
                    <td>{applied.linkedin}</td>
                    <td>x</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default VewApplications;