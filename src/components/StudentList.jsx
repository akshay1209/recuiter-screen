import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Assuming Heroicons is installed for the close icon

const StudentList = () => {
  // Sample student data for demonstration
  const students = [
    {
      id: 1,
      name: "John Doe",
      course: "Computer Science",
      semester: "6th",
      alignmentScore: "85%",
      image: "/path/to/image1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      course: "Information Technology",
      semester: "5th",
      alignmentScore: "90%",
      image: "/path/to/image2.jpg",
    },
    {
      id: 3,
      name: "Alex Johnson",
      course: "Software Engineering",
      semester: "4th",
      alignmentScore: "78%",
      image: "/path/to/image3.jpg",
    },
  ];

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTechnicalRating, setSelectedTechnicalRating] = useState(0);
  const [selectedFunctionalRating, setSelectedFunctionalRating] = useState(0);
  const [selectedSoftRating, setSelectedSoftRating] = useState(0);

  const handleRatingClick = (setRating, value) => {
    setRating(value);
  };

  const RatingRow = ({ title, selectedRating, setRating }) => (
    <div className="mt-5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex space-x-2 mt-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((point) => (
          <div
            key={point}
            onClick={() => handleRatingClick(setRating, point)}
            className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border ${
              point <= selectedRating ? "bg-[#9D4EDD]" : "bg-white"
            }`}
          >
            {point}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Student List</h1>
      <p className="text-xl font-medium text-gray-600">Details of Interview Rounds</p>

      {/* Student List */}
      <div className="flex flex-col space-y-4">
        {students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between bg-white rounded shadow"
          >
            <img
              src={student.image}
              alt={`${student.name}'s photo`}
              className="h-16 w-16 rounded-full mr-4"
            />
            <div className="flex flex-row justify-between space-x-4">
              <div className="flex flex-col">
                <p className="font-bold">Student Name</p>
                <p>{student.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Course</p>
                <p>{student.course}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Semester</p>
                <p>{student.semester}</p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold">Alignment Score</p>
                <p>{student.alignmentScore}</p>
              </div>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsDialogOpen(true)}
            >
              Add Feedback
            </button>
          </div>
        ))}
      </div>

      {/* Feedback Dialog */}
      {isDialogOpen && (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
    <div className="bg-white rounded-xl shadow-lg w-2/5 p-6 relative">
      {/* Close Icon */}
      <button
        className="absolute top-4 right-4"
        onClick={() => setIsDialogOpen(false)}
      >
        <XMarkIcon className="h-6 w-6 text-gray-500" />
      </button>

      {/* Dialog Content */}
      <h1 className="text-2xl font-bold">Send your Feedback</h1>
      <p className="text-gray-500">Your feedback is valuable for us!</p>

      {/* Technical Skills Rating */}
      <RatingRow
        title="Technical Skills"
        selectedRating={selectedTechnicalRating}
        setRating={setSelectedTechnicalRating}
      />

      {/* Functional Skills Rating */}
      <RatingRow
        title="Functional Skills"
        selectedRating={selectedFunctionalRating}
        setRating={setSelectedFunctionalRating}
      />

      {/* Soft Skills Rating */}
      <RatingRow
        title="Soft Skills"
        selectedRating={selectedSoftRating}
        setRating={setSelectedSoftRating}
      />

      {/* Select Details */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Select Details</h3>
        <div className="flex space-x-4 mt-2">
          <button
            className="border border-gray-300 px-4 py-2 rounded-full bg-white hover:bg-gray-100 focus:bg-[#9D4EDD] focus:text-white"
          >
            Rejected
          </button>
          <button
            className="border border-gray-300 px-4 py-2 rounded-full bg-white hover:bg-gray-100 focus:bg-[#9D4EDD] focus:text-white"
          >
            Shortlisted
          </button>
        </div>
      </div>

      {/* Any Comments */}
      <div className="mt-5">
        <h3 className="text-lg font-semibold">Any Comments</h3>
        <textarea
          className="w-full h-24 mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#9D4EDD]"
          placeholder="Write your comments here..."
        ></textarea>
      </div>

      {/* Add Additional Feedback and Submit */}
      <div className="flex justify-between items-center mt-5">
        <p
          className="cursor-pointer text-[#9D4EDD] hover:underline"
          onClick={() => alert("Additional feedback clicked")}
        >
          + Add Additional Feedback
        </p>
        <button
          className="bg-[#9D4EDD] text-white px-4 py-2 rounded-lg hover:bg-[#7A3BCC]"
          onClick={() => alert("Feedback submitted")}
        >
          Add Feedback
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default StudentList;
