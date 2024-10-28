import React from 'react';

const InterviewRound = () => {
  return (
    <div className="p-8">
  <h1 className="text-2xl font-semibold">Interview Rounds</h1>
  <p className="text-xl font-medium mt-4">Details of Interview Rounds</p>
  <div className="flex flex-row justify-between space-x-4 mt-10 border-2 border-gray-500 p-4 rounded-xl">
    <div className="flex flex-col items-center">
      <p className="bg-green-400 border justify-center rounded-xl px-4 text-center">Initial</p>
      <p className="text-center">23rd of June 2024</p>
    </div>
    <div className="h-16 w-px bg-gray-300" />
    <div className="flex flex-col">
      <p className="font-bold">Initial List of Applied Students</p>
      <p>Apply before 14th of June</p>
    </div>
    <div className="flex flex-col">
      <button className="font-bold border-gray-800 border-2 p-2 rounded-md">
        Applied Students
      </button>
    </div>
  </div>
  <div className="flex items-center space-x-1">
  <p className="font-bold text-gray-500">Note*:-</p>
  <p className="text-gray-500">The buttons will enable only after 24hrs</p>
</div>
<div className="border-2 border-gray-500 rounded-xl p-4 flex justify-between items-center">
  {/* Heading and Text */}
  <div className="flex flex-col">
    <h1 className="text-lg font-bold">Final Result Declaration</h1>
    <p>Apply before 14th of June</p>
  </div>

  {/* Button */}
  <button className="bg-[#9D4EDD] text-white px-4 py-2 rounded-md">
    Click to Declare Result
  </button>
</div>
  </div>
  );
};

export default InterviewRound;
