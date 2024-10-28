import React from 'react';
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ViewDetails = ({ onClose, college, driveDate, jobsCount, studentsApplied }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-1/3 relative">
        <Button 
          className="absolute top-4 right-4" // Positioning the close button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <X className="h-5 w-5 text-gray-600" />
        </Button>
        <div>
        <h2 className="text-lg font-bold">{college} Details</h2>
        <div className="mt-4 border bottom-5 p-4 border-gray-300 rounded-xl">
          <p>No of Jobs: {jobsCount}</p>
          <p>No of Students Applied: {studentsApplied}</p>
          <p>No. of Students offered: 20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
