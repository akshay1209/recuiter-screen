import React, { useState } from "react";
import StudentList from "@/components/StudentList";
import InterviewRound from "@/components/InterviewRound";

const Interview = () => {
  const [activeSection, setActiveSection] = useState("appliedStudents");
  const [showFullAbout, setShowFullAbout] = useState(false);

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const aboutText =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae asperiores ab labore veritatis. Iure numquam ratione enim aspernatur porro explicabo repudiandae! Nemo quidem rem necessitatibus nulla atque quam delectus quisquam ratione! Iure, officia saepe necessitatibus doloremque, earum beatae culpa itaque id alias in dolorum doloribus quos? Blanditiis nostrum recusandae reiciendis.";

  return (
    <div className="bg-[#F8FAFC] flex flex-row">
      <div className="flex flex-col w-8/12 mt-5 px-8 space-y-6">
        <div className=" bg-white p-4 rounded shadow">
          <div className="flex justify-between items-center mt-2">
            <div>
              <h1 className="text-xl font-semibold">Name of the Institute</h1>
              <span className="text-gray-500">Date: MM/DD/YYYY</span>
            </div>
            <span className="text-blue-500 underline cursor-pointer">
              Change Institute
            </span>
          </div>

          <hr className="my-4 border-gray-300" />

          {/* Contact Person Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <div className="text-center">
                <p className="text-gray-500">Contact Person</p>
                <p className="text-black font-bold">Name</p>
                <p className="text-black">Designation</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Contact Person</p>
                <p className="text-black font-bold">Name</p>
                <p className="text-black">Designation</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Contact Person</p>
                <p className="text-black font-bold">Name</p>
                <p className="text-black">Designation</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Contact Person</p>
                <p className="text-black font-bold">Name</p>
                <p className="text-black">Designation</p>
              </div>
            </div>
          </div>

          <hr className="my-4 border-gray-300" />

          <div className="flex text-gray-500 font-bold space-x-8 cursor-pointer">
            <span
              onClick={() => handleSectionChange("appliedStudents")}
              className={`${
                activeSection === "appliedStudents"
                  ? "underline text-black decoration-purple-500"
                  : ""
              }`}
            >
              Applied Students
            </span>
            <span
              onClick={() => handleSectionChange("interviewRounds")}
              className={`${
                activeSection === "interviewRounds"
                  ? "underline text-black decoration-purple-500"
                  : ""
              }`}
            >
              Interview Rounds
            </span>
          </div>
        </div>

        <div className="mt-4 bg-white p-4 rounded shadow">
          {activeSection === "appliedStudents" ? (
            <div>
              <StudentList />
            </div>
          ) : (
            <div>
              <InterviewRound />
            </div>
          )}
        </div>
      </div>

      {/* Job Details Section */}
      <div className="flex flex-col w-4/12 px-8 mr-6 mt-5 bg-white rounded shadow space-y-6 ">
        <h1 className="text-2xl mt-5 font-bold">Senior UI/UX Designer</h1>

        {/* Company Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="/path-to-logo-image.jpg"
            alt="Company Logo"
            className="w-16 h-16"
          />
          <p className="text-lg font-medium">Company Name</p>
        </div>

        {/* Job Details Box */}
        <div className="border border-gray-300 p-4 rounded space-y-4">
          {/* Package and Location */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-semibold">Package</p>
              <p>5 Lax Per Annum</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Location</p>
              <p>Banglore, india</p>
            </div>
          </div>

          {/* Drive Date and Apply Before */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-semibold">Drive Date</p>
              <p>20th July 2024</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">Apply Before</p>
              <p>15th July 2024</p>
            </div>
          </div>
          <div>
            <p>Programs & Criteria</p>
            <p>B. Tech (Production)</p>
          </div>
          <p>CGPA : 6.5</p>
          <p>Previous Backlog : 2</p>
        </div>
        <div>
          <h3>About</h3>
          <p>
            {showFullAbout
              ? aboutText
              : aboutText.split(" ").slice(0, 20).join(" ")}
            ...
          </p>
          <button
            className="text-blue-500 underline cursor-pointer"
            onClick={toggleAbout}
          >
            {showFullAbout ? "See Less" : "See More"}
          </button>
        </div>
        <div>
        <h3>Skills</h3>
        <div className="flex flex-wrap space-x-2 space-y-2">
          <p className="bg-[#F0F0F0] rounded-2xl p-2 w-1/3 text-center">Product Design</p>
          <p className="bg-[#F0F0F0] rounded-xl p-2 w-1/3 text-center">UX Research</p>
          <p className="bg-[#F0F0F0] rounded-xl p-2 w-1/3 text-center">Prototyping</p>
          <p className="bg-[#F0F0F0] rounded-xl p-2 w-1/3 text-center">Wireframing</p>
          <p className="bg-[#F0F0F0] rounded-xl p-2 w-1/3 text-center">User Testing</p>
          <p className="bg-[#F0F0F0] rounded-xl p-2 w-1/3 text-center">UI Design</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Interview;
