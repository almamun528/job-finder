import React from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../CustomHooks/useAuth";
import { ToastContainer, toast } from "react-toastify";

const JobApply = () => {
  const { id } = useParams();
  console.log(id);
  const { user } = useAuth();
  console.log(user, " user is login");
  const submitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const cv = form.cv.value;

    // console.log('Linkedin url ',linkedin, ' github ', github, ' cv ', cv)
    const jobApplication = {
      job_id: id,
      applicant: user.email,
      linkedin,
      github,
      cv,
    };

    // send data to server
    fetch("http://localhost:3000/job_applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApplication),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if(data.insertedId){
        toast.success("Thanks for Applying who you will get back to you")}
    });
 
    console.log("job application data  ", jobApplication);
    form.reset();
  };

  return (
    <>
      <h1 className="text-2xl text-center font-bold">Apply Your Job</h1>
      <section>
        <ToastContainer/>
        <form onSubmit={submitApplication} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Linkedin URL</span>
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="Linkedin URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">GitHub URL</span>
            </label>
            <input
              type="url"
              name="github"
              placeholder="GitHub URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CV URL</span>
            </label>
            <input
              type="url"
              name="cv"
              placeholder="CV URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Apply Now</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default JobApply;
