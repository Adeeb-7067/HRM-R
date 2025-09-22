import DatePickerField from "@/components/ui/datePicker";
import { cn } from "@/lib/utils";
import React from "react";
import toast from "react-hot-toast";

// Reusable Input Component
const InputField = ({ label, type = "text", name, value, onChange, className = "", ...props }) => (
  <div>
    <label className="block text-black dark:text-gray-50 text-[0.7rem] font-normal mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full bg-white dark:bg-gray-800 border border-gray-300 text-[0.7rem] dark:border-gray-700 rounded-md px-4 py-1.5 ${className}`}
      {...props}
    />
  </div>
);

// Reusable Select Component
const SelectField = ({ label, name, value, onChange, children, className = "" }) => {
  return (
    <div className="w-full">
      {/* Label */}
      <label className="block text-[0.7rem] font-normal text-black dark:text-gray-200 mb-1">
        {label}
      </label>

      {/* Select */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full px-4 py-1.5 rounded-sm text-[0.7rem] font-normal",
          "bg-white dark:bg-gray-800",
          "border border-gray-300 dark:border-gray-700",
          "text-gray-900 dark:text-gray-100",
          "shadow-sm focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:outline-none",
          "hover:border-gray-400 dark:hover:border-gray-500",
          "transition-all duration-200 ease-in-out",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
};
const FamilyDetail = ({onNext,onPrev}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <div className="col-span-1">
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  gap-2 p-5 rounded-lg">
          <h1 className="text-xl font-semibold mt-2 mb-4">Family Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InputField
              label="Spouse Name"
              name="spouseName"
              className="mb-2"
            />
            <DatePickerField
              label="Spouse Date of Birth"
              type="Date"
              name="spouseDob"
              className="mb-2"
            />
            <InputField
              label="Total No.of Children"
              name="childrenCount"
              className="mb-2"
            />
            <InputField
              label="Total No. of Dependents"
              name="dependentsCount"
              className="mb-2"
            />
            <InputField
              label="Number of Child Going to School"
              name="schoolChildren"
            />
            <InputField
              label="No. of Children in Hostel"
              name="hostelChildren"
            />
          </div>
        </div>
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg mt-4">
          <InputField
            label="First Nominee Name"
            name="firstNominee"
            className="p-2"
          />
          <SelectField
            label="Relation (with First Nominee)"
            name="firstNomineeRelation"
            className="p-2"
          >
            <option>Spouse</option>
            <option>Child</option>
            <option>Parent</option>
            <option>Sibling</option>
          </SelectField>
        </div>
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  gap-2 p-5 rounded-lg mt-4">
          <h1 className="text-sm font-semibold mb-6">Emergency Contact Details 1</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Name"
              name="emergency1Name"
              className="p-2"
            />
            <SelectField
              label="RelationShip"
              name="emergency1Relation"
              className="p-2"
            >
              <option>Select Your Relationship</option>
              <option>Child</option>
              <option>Parent</option>
              <option>Sibling</option>
            </SelectField>
            <InputField
              label="Mobile Number"
              name="emergency1Mobile"
              className="p-2"
            />
            <InputField
              label="Email ID"
              name="emergency1Email"
              className="p-2"
            />
            <InputField
              label="Address"
              name="emergency1Address"
              className="p-2"
            />
            <InputField
              label="TelePhone Number"
              name="emergency1Telephone"
              className="p-2"
            />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 space-y-0.5 gap-2 p-5 grid grid-cols-1 md:grid-cols-2 rounded-lg">
          <InputField
            label="First Child Name"
            name="firstChildName"
            className="p-2"
          />
          <DatePickerField
            label="Date of Birth (First Child)"
            type="Date"
            name="firstChildDob"
            className="p-2"
          />
          <InputField
            label="Second Child Name"
            name="secondChildName"
            className="p-2"
          />
          <InputField
            label="Date of Birth (Second Child)"
            name="secondChildDob"
            className="p-2"
          />
          <InputField
            label="Father's Occupation"
            name="fatherOccupation"
            className="p-2"
          />
          <InputField
            label="Mother's Occupation"
            name="motherOccupation"
            className="p-2"
          />
          <InputField
            label="Religion Name"
            name="religion"
            className="p-2"
          />
          <SelectField
            label="Blood Group"
            name="bloodGroup"
            className="p-2"
          >
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </SelectField>
        </div>
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg mt-4">
          <InputField
            label="Second Nominee Name"
            name="secondNominee"
            className="p-2"
          />
          <SelectField
            label="Relation (with Second Nominee)"
            name="secondNomineeRelation"
            className="p-2"
          >
            <option>Spouse</option>
            <option>Child</option>
            <option>Parent</option>
            <option>Sibling</option>
          </SelectField>
        </div>
        <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  gap-2 p-5 rounded-lg mt-5">
          <h1 className="text-sm font-semibold mb-8">Contact Details 2</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <InputField
              label="Name"
              name="emergency2Name"
              className="p-2"
            />
            <SelectField
              label="RelationShip"
              name="emergency2Relation"
              className="p-2"
            >
              <option>Spouse</option>
              <option>Child</option>
              <option>Parent</option>
              <option>Sibling</option>
            </SelectField>
            <InputField
              label="Mobile Number"
              name="emergency2Mobile"
              className="p-2"
            />
            <InputField
              label="Email ID"
              name="emergency2Email"
              className="p-2"
            />
            <InputField
              label="Address"
              name="emergency2Address"
              className="p-2"
            />
            <InputField
              label="TelePhone Number"
              name="emergency2Telephone"
              className="p-2"
            />
          </div>
        </div>
        <div className="flex justify-end mt-1 w-full gap-2  ">
          <button 
            onClick={()=>onPrev()}
            className="bg-white dark:bg-[#E4E6EB]/10 border-2 text-[#9376CA] font-semibold cursor-pointer text-[0.7rem] border-[#9376CA] py-1 rounded-sm w-1/5 my-3 ">
              Previous
            </button>
            <button 
            className="bg-white dark:bg-[#E4E6EB]/10 border-2 text-[#9376CA] font-semibold text-[0.7rem] border-[#9376CA] py-1 rounded-sm w-1/5 my-3 ">
              Reset
            </button>
            <button
              onClick={() => {toast.success('Submit completed')
                window.location.reload()
                }}
              className="bg-[#9376CA] text-white font-semibold text-[0.7rem] w-1/5 py-1 my-3  cursor-pointer rounded-sm"
            >
              Submit
            </button>
          </div>
      </div>
    </div>
  );
};

export default FamilyDetail;