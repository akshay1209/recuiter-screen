import React from "react";
import recruiterCardData from "./recruiterCardData.json";

const Jobs = () => {
  return (
    <div className="bg-[#F8FAFC] px-10 py-6">
      <h1 className="font-bold text-2xl mb-4">List of Recruiting Companies</h1>
      <p className="text-lg mb-6">
        You have {recruiterCardData.length} Notifications
      </p>

      <div className="space-y-6">
        {recruiterCardData.map((recruiter) => (
          <div key={recruiter.id} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start justify-between space-x-5">
              <img
                src={recruiter.logo}
                alt="Brand Logo"
                className="h-16 w-16 rounded-full"
              />
              <div className="flex space-x-28">
                <div>
                  <p className="text-gray-500">Recruiter Name</p>
                  <h3 className="font-bold">{recruiter.name}</h3>
                </div>
                <div>
                  <p className="text-gray-500">Recruiter Email</p>
                  <h3 className="font-bold">{recruiter.email}</h3>
                </div>
                <div>
                  <p className="text-gray-500">Recruiter Mobile No:</p>
                  <h3 className="font-bold">{recruiter.mobile}</h3>
                </div>
              </div>

              <button className="bg-white text-black font-semibold border border-gray-500 px-4 py-2 rounded-lg hover:bg-[#7A3BCC]">
                View Details
              </button>
            </div>

            <hr className="border-gray-300 my-4" />

            <div className="flex justify-center w-full">
  <div className="border border-gray-300 rounded-xl p-4 flex justify-between w-full max-w-2xl">
  <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <img
          src="/Vector.png"
          alt="Icon"
          className="h-5 w-5"
        />
        <p className="text-gray-500">Openings</p>
      </div>
      <h3 className="font-bold">{recruiter.openings}</h3>
    </div>

    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <img
          src="/Vector.png"
          alt="Icon"
          className="h-5 w-5"
        />
        <p className="text-gray-500">Shortlisted</p>
      </div>
      <h3 className="font-bold">{recruiter.shortlisted}</h3>
    </div>

    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <img
          src="/Vector.png"
          alt="Icon"
          className="h-5 w-5"
        />
        <p className="text-gray-500">Interviewed</p>
      </div>
      <h3 className="font-bold">{recruiter.interviewed}</h3>
    </div>

    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        <img
          src="/Vector.png"
          alt="Icon"
          className="h-5 w-5"
        />
        <p className="text-gray-500">Offered</p>
      </div>
      <h3 className="font-bold">{recruiter.offered}</h3>
    </div>
  
  </div>
</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
