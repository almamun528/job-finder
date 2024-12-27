import React from 'react';
import useAuth from '../../CustomHooks/useAuth';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const AddJobs = () => {
    const{user}= useAuth()
    const navigate = useNavigate()
  const handleAddJobs = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    const { min, max, currency, ...newJob } = initialData;

    newJob.salaryRange = { min, max, currency };
    // let salary = {min, max, currency} (14 number line ta ei vabe kaj korse ) //  newJob.salaryRange = salary
newJob.requirements = newJob.requirements.split('\n')
newJob.responsibilities = newJob.responsibilities.split("\n");

// send the data to backend 
fetch("http://localhost:3000/jobs",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body: JSON.stringify(newJob)
})
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
      toast.success("Job is added");
    }
    setTimeout(()=>{
        navigate("/myPostedJobs");
    },900)
  });


  };
  return (
    <div>
        <ToastContainer/>
      <h2 className="text-3xl">Post a new Job</h2>
      <form onSubmit={handleAddJobs} className="card-body">
        {/* Job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select
            defaultValue="Pick a Job type"
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled>Pick a Job type</option>
            <option>Full-time</option>
            <option>Intern</option>
            <option>Part-time</option>
          </select>
        </div>
        {/* job Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select
            defaultValue="Pick a Job Field"
            className="select select-ghost w-full max-w-xs"
          >
            <option disabled>Pick a Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>
        {/* salary range */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              name="min"
              placeholder="Min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              name="max"
              placeholder="Max "
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <select
              defaultValue="Currency"
              name="currency"
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>
        {/* Job Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>
        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>
        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="put each requirements in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write each responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Full Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Full Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* HR Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Email</span>
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            name="hr_email"
            placeholder="HR Email"
            className="input input-bordered"
            required
          />
        </div>
        {/* application Deadline */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input
            type="date"
            name="applicationDeadline"
            placeholder="Deadline"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo URL"
            className="input input-bordered"
            required
          />
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJobs;

// {
//   "_id": "676b94de8bc0166f09da53e1",
//   "title": "Project Manager",
//   "location": "Mirpur, Dhaka",
//   "jobType": "Hybrid",
//   "category": "Management",
//   "applicationDeadline": "2024-12-30",
//   "salaryRange": {
//     "min": 60000,
//     "max": 90000,
//     "currency": "bdt"
//   },
//   "description": "We are seeking a dynamic Project Manager to lead our development team and ensure successful project delivery.",
//   "company": "Nicola Tesla.",
//   "requirements": [
//     "JIRA",
//     "Trello",
//     "Slack",
//     "Agile Methodologies"
//   ],
//   "responsibilities": [
//     "Oversee project execution",
//     "Manage team workflows",
//     "Ensure timely project delivery"
//   ],
//   "status": "active",
//   "hr_email": "hr@innovatetech.com",
//   "hr_name": "Tahsin Rahman",
//   "company_logo": "https://i.ibb.co/26n3Jp7/tesla.png"
// }