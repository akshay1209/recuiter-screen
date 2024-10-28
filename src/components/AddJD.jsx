import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const dummyOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
const packageOptions = Array.from({ length: 20 }, (_, i) => i + 1);

export default function AddJD({ onClose }) {
  const [selectedProgramme, setSelectedProgramme] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState([]);
  const [selectedStream, setSelectedStream] = useState([]);
  const [selectedBatch, setSelectedBatch] = useState(""); // Single selection for Batch
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [scoringMethod, setScoringMethod] = useState("");
  const [scoreValue, setScoreValue] = useState("");
  const [packageType, setPackageType] = useState("Fix");
  const [packageValue, setPackageValue] = useState({ fix: "", range: { min: "", max: "" } });
  const [dateOfDrive, setDateOfDrive] = useState("");
  const [lastDateOfApplication, setLastDateOfApplication] = useState("");

  const handleSelect = (setSelected) => (option) => {
    setSelected((prev) => [...prev, option]);
  };

  const handleDeselect = (setSelected) => (option) => {
    setSelected((prev) => prev.filter((item) => item !== option));
  };

  const handleScoreChange = (e) => {
    const value = e.target.value;
    if (scoringMethod === "Percentage" && value <= 100) setScoreValue(value);
    if (scoringMethod === "CGPA" && value <= 10) setScoreValue(value);
    if (scoringMethod === "GPA" && value <= 5) setScoreValue(value);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-lg w-full max-w-md relative max-h-[90vh] overflow-y-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Add Job Description</h3>
          <Button variant="destructive" size="icon" className="ml-2" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-gray-600 mb-2">Add your company within 2 min</p>
        <hr className="border-gray-300 mb-4" />

        {/* Name Input Field */}
        <h4 className="mt-2">Name</h4>
        <input
          type="text"
          className="border border-gray-300 rounded p-2 mb-4 w-full"
          placeholder="Enter your name"
        />

        {/* Dropdowns */}
        <Dropdown
          label="Programme"
          selected={selectedProgramme}
          options={dummyOptions}
          onSelect={handleSelect(setSelectedProgramme)}
          onDeselect={handleDeselect(setSelectedProgramme)}
        />

        <Dropdown
          label="Designation"
          selected={selectedDesignation}
          options={dummyOptions}
          onSelect={handleSelect(setSelectedDesignation)}
          onDeselect={handleDeselect(setSelectedDesignation)}
        />

        <Dropdown
          label="Stream"
          selected={selectedStream}
          options={dummyOptions}
          onSelect={handleSelect(setSelectedStream)}
          onDeselect={handleDeselect(setSelectedStream)}
        />

        {/* Single Selection Dropdown for Batch */}
        <div className="mb-4">
          <h4>Batch</h4>
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">Select Batch</option>
            {dummyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <Dropdown
          label="Skills"
          selected={selectedSkills}
          options={dummyOptions}
          onSelect={handleSelect(setSelectedSkills)}
          onDeselect={handleDeselect(setSelectedSkills)}
        />

        {/* Scoring Method Section */}
        <h4 className="mt-4">Choose Your Scoring Method</h4>
        <div className="flex items-center gap-4">
          <select
            onChange={(e) => {
              setScoringMethod(e.target.value);
              setScoreValue(""); // Reset score value on change
            }}
            className="border border-gray-300 rounded p-2 w-1/2 mt-5"
          >
            <option value="">Scoring method</option>
            <option value="Percentage">Percentage</option>
            <option value="CGPA">CGPA</option>
            <option value="GPA">GPA</option>
          </select>

          {/* Conditional Input Field for Scoring Method */}
          {scoringMethod && (
            <div className="flex flex-col w-1/2">
              <p className="text-gray-600 text-xs mb-1">
                {scoringMethod === "Percentage" && "max. 100"}
                {scoringMethod === "CGPA" && "max. 10.0"}
                {scoringMethod === "GPA" && "max. 5.0"}
              </p>
              <input
                type="number"
                value={scoreValue}
                onChange={handleScoreChange}
                placeholder={`Enter your ${scoringMethod}`}
                className="border border-gray-300 rounded p-2"
              />
            </div>
          )}
        </div>

        {/* Package Section */}
        <h4 className="mt-4">Package</h4>
        <div className="flex items-center gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="Fix"
              checked={packageType === "Fix"}
              onChange={(e) => setPackageType(e.target.value)}
              className="mr-2"
            />
            Fix
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="Range"
              checked={packageType === "Range"}
              onChange={(e) => setPackageType(e.target.value)}
              className="mr-2"
            />
            Range
          </label>
        </div>
        <div className="flex gap-4 mt-2">
          {packageType === "Fix" ? (
            <select
              value={packageValue.fix}
              onChange={(e) => setPackageValue({ ...packageValue, fix: e.target.value })}
              className="border border-gray-300 rounded p-2 w-full"
            >
              {packageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <>
              <select
                value={packageValue.range.min}
                onChange={(e) =>
                  setPackageValue((prev) => ({
                    ...prev,
                    range: { ...prev.range, min: e.target.value },
                  }))
                }
                className="border border-gray-300 rounded p-2 w-1/2"
              >
                {packageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                value={packageValue.range.max}
                onChange={(e) =>
                  setPackageValue((prev) => ({
                    ...prev,
                    range: { ...prev.range, max: e.target.value },
                  }))
                }
                className="border border-gray-300 rounded p-2 w-1/2"
              >
                {packageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </>
          )}
        </div>

        {/* Date of Drive Section */}
        <h4 className="mt-4">Date of Drive</h4>
        <input
          type="date"
          value={dateOfDrive}
          onChange={(e) => setDateOfDrive(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />

        {/* Last Date of Application Section */}
        <h4 className="mt-4">Last Date of Application</h4>
        <input
          type="date"
          value={lastDateOfApplication}
          onChange={(e) => setLastDateOfApplication(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
        />
        {/* Add job Discription Section */}
        <h4 className="mt-4">Add Discription</h4>
        <textarea className="w-full mt-2" placeholder="Write Job Discription Here"></textarea>

        {/* Footer Section */}
        <div className="flex justify-between items-center mt-6">
          <h6 className="text-blue-600 cursor-pointer">Learn More</h6>
          <Button onClick={onClose} className="w-1/3 bg-[#9D4EDD] text-white rounded-xl">
            Add Job
          </Button>
        </div>
      </div>
    </div>
  );
}

function Dropdown({ label, options, selected, onSelect, onDeselect }) {
  return (
    <div className="mb-4">
      <h4>{label}</h4>
      <select
        onChange={(e) => {
          if (e.target.value) {
            onSelect(e.target.value);
            e.target.value = "";
          }
        }}
        className="border border-gray-300 rounded p-2 w-full mb-2"
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((item) => (
            <div
              key={item}
              className="bg-blue-100 px-3 py-1 rounded-full flex items-center"
            >
              <span>{item}</span>
              <button className="ml-2 text-red-600" onClick={() => onDeselect(item)}>
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
