import DatePickerField from "@/components/ui/datePicker";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsFolder } from "react-icons/bs";
import { FiSearch, FiPhone } from "react-icons/fi";

// Reusable Input Component
const InputField = ({ label, type = "text", name, value, onChange, className = "", ...props }) => (
  <div>
    <label className="block text-black dark:text-gray-50 text-[0.7rem] font-normal mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full bg-white dark:bg-gray-800 border border-gray-300 text-[0.7rem] dark:border-gray-700 rounded-sm px-4 py-1.5 ${className}`}
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
// Reusable Search Input Component
const SearchInput = ({ label, name, value, onChange, icon: Icon }) => (
  <div className="relative">
    <label className="block text-[0.7rem] font-normal text-black dark:text-gray-50 mb-1">{label}</label>
    <div className="relative">
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-white text-[0.7rem] dark:bg-gray-800 mb-2 border border-gray-300 dark:border-gray-600 rounded-sm pl-3 pr-10 py-1.5  focus:ring-2 focus:ring-purple-300 focus:border-purple-400 outline-none"
      />
      <Icon className="absolute right-3 top-1/3 -translate-y-1/2 text-black dark:text-white" />
    </div>
  </div>
);

const PersonalInfo = ({ onNext }) => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    // Personal Details
    image: '',
    salutation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    nationality: "",
    dob: "",
    age: "",
    mobileNumber: "",
    email: "",

    // Family Details
    fatherName: "",
    motherName: "",
    maritalStatus: "",
    spouseName: "",
    dateOfMarriage: "",
    enterNationality: "",

    // Present Address
    presentAddress1: "",
    presentAddress2: "",
    presentCity: "",
    presentZip: "",
    presentState: "",
    presentCountry: "",
    sameAsPermanent: false,

    // Permanent Address
    permanentAddress1: "",
    permanentAddress2: "",
    permanentCity: "",
    permanentZip: "",
    permanentState: "",
    permanentCountry: "",

    // Professional Details
    employeeCode: "",
    staffId: "",
    confirmationDate: "",
    employeeType: "",
    doj: "",
    leaveTemplate: "",
    leaveAssignDate: "",
    noticeDays: "",

    // Manager Details
    l1Manager: "",
    l1ManagerName: "",
    l1ManagerEmail: "",
    l1ManagerMobile: "",
    hrManager: "",
    hrName: "",
    hrEmail: "",
    hrMobile: "",

    // Unit & Department
    unitName: "",
    department: "",
    subDepartment: "",
    grade: "",
    designation: "",
    level: "",
    location: "",
    unit: "",

    // Tax & PAN
    pan: "",
    taxRegime: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        <div className="cols-span-1 flex flex-col">
          {/* Personal Details */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 p-5 rounded-lg ">
            <h1 className="text-base font-semibold mb-2">Personal Details</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mb-2">
              <div className="bg-white dark:bg-[#E4E6EB]/10 dark:text-white rounded-full w-30 h-30 xl:h-24 xl:w-24 flex flex-col justify-center items-center shadow relative mt-3 py-3 px-3 xl:px-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                {image && (
                  <img
                    src={image}
                    value={formData.image}
                    alt="Uploaded"
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
                  />
                )}
                {!image && (
                  <>
                    <BsFolder className="text-lg sm:text-md md:text-lg text-gray-500" />
                    <p className="text-gray-700 dark:text-white text-[10px] lg:text-[10px] font-normal hidden lg:block">
                      Upload your photo
                    </p>
                    <label
                      htmlFor="fileUpload"
                      className="bg-[#9376CA] text-white text-xs px-2 py-1 rounded-lg mt-2 cursor-pointer z-10"
                    >
                      Photo
                    </label>
                    <input
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </>
                )}
              </div>

              <div className="col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-2">
                <SelectField
                  label="Salutation"
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleChange}
                >
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                </SelectField>

                <InputField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <InputField
                  label="Middle Name"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                />

                <InputField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <InputField
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <InputField
                label="Nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
              <DatePickerField
                label="DOB"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
              />
              <InputField
                label="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <InputField
                label="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
              <InputField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Family Details */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
            <InputField
              label="Father Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
            <InputField
              label="Mother Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            />
            <InputField
              label="Martial Status"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
            />
            <InputField
              label="Spouse Now"
              name="spouseName"
              value={formData.spouseName}
              onChange={handleChange}
            />
            <InputField
              label="Date Of Marriage"
              name="dateOfMarriage"
              value={formData.dateOfMarriage}
              onChange={handleChange}
            />
            <InputField
              label="Enter Nationality"
              name="enterNationality"
              value={formData.enterNationality}
              onChange={handleChange}
            />
          </div>

          {/* Present Address */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 rounded-lg mt-4">
            <h1 className="text-base font-semibold mb-2">Present Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <InputField
                label="Address 1"
                name="presentAddress1"
                value={formData.presentAddress1}
                onChange={handleChange}
              />
              <InputField
                label="Address 2"
                name="presentAddress2"
                value={formData.presentAddress2}
                onChange={handleChange}
              />
              <SelectField
                label="City"
                name="presentCity"
                value={formData.presentCity}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
              </SelectField>
              <InputField
                label="Enter Zip"
                name="presentZip"
                value={formData.presentZip}
                onChange={handleChange}
              />
              <SelectField
                label="State"
                name="presentState"
                value={formData.presentState}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="west-bengal">West Bengal</option>
                <option value="telangana">Telangana</option>
                <option value="gujarat">Gujarat</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="madhya-pradesh">Madhya Pradesh</option>
              </SelectField>
              <SelectField
                label="Country"
                name="presentCountry"
                value={formData.presentCountry}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="united-states">United States</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="japan">Japan</option>
                <option value="singapore">Singapore</option>
                <option value="uae">United Arab Emirates</option>
              </SelectField>
            </div>
            <div className="flex mt-5 gap-2">
              <input
                type="checkbox"
                name="sameAsPermanent"
                checked={formData.sameAsPermanent}
                onChange={handleChange}
                id="Address"
                className="h-4 w-4 mt-1"
              />
              <p className="text-[14px]">Use present address as permanent address</p>
            </div>
          </div>

          {/* Permanent Address */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 xl:h-[285px] p-5 rounded-lg mt-4">
            <h1 className="text-base font-semibold mb-6">Permanent Address</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <InputField
                label="Address 1"
                name="permanentAddress1"
                value={formData.permanentAddress1}
                onChange={handleChange}
              />
              <InputField
                label="Address 2"
                name="permanentAddress2"
                value={formData.permanentAddress2}
                onChange={handleChange}
              />
              <SelectField
                label="City"
                name="permanentCity"
                value={formData.permanentCity}
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="chennai">Chennai</option>
                <option value="kolkata">Kolkata</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
                <option value="ahmedabad">Ahmedabad</option>
              </SelectField>
              <InputField
                label="Enter Zip"
                name="permanentZip"
                value={formData.permanentZip}
                onChange={handleChange}
              />
              <SelectField
                label="State"
                name="permanentState"
                value={formData.permanentState}
                onChange={handleChange}
              >
                <option value="">Select State</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="karnataka">Karnataka</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="west-bengal">West Bengal</option>
                <option value="telangana">Telangana</option>
                <option value="gujarat">Gujarat</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="madhya-pradesh">Madhya Pradesh</option>
              </SelectField>
              <SelectField
                label="Country"
                name="permanentCountry"
                value={formData.permanentCountry}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="united-states">United States</option>
                <option value="united-kingdom">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="germany">Germany</option>
                <option value="france">France</option>
                <option value="japan">Japan</option>
                <option value="singapore">Singapore</option>
                <option value="uae">United Arab Emirates</option>
              </SelectField>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          {/* Professional Details */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 xl:h-[390px]  p-5 rounded-lg mb-4">
            <h1 className="text-base font-semibold mb-6">Professional Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 space-y-5">
              <InputField
                label="Employee Code"
                name="employeeCode"
                value={formData.employeeCode}
                onChange={handleChange}
              />
              <InputField
                label="Staff ID"
                name="staffId"
                value={formData.staffId}
                onChange={handleChange}
              />
              <InputField
                label="Confirmation Date"
                name="confirmationDate"
                value={formData.confirmationDate}
                onChange={handleChange}
              />
              <InputField
                label="Employee type"
                name="employeeType"
                value={formData.employeeType}
                onChange={handleChange}
              />
              <DatePickerField
                label="DOJ"
                type="date"
                name="doj"
                value={formData.doj}
                onChange={handleChange}
              />
              <InputField
                label="Leave Template"
                name="leaveTemplate"
                value={formData.leaveTemplate}
                onChange={handleChange}
              />
              <DatePickerField
                label="Leave Assign Date"
                type="date"
                name="leaveAssignDate"
                value={formData.leaveAssignDate}
                onChange={handleChange}
              />
              <InputField
                label="Notice Days"
                name="noticeDays"
                value={formData.noticeDays}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Manager Details */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 mt-4 gap-2  mb-4">
            <div className="space-y-3">
              <SearchInput
                label="L1 Manager"
                name="l1Manager"
                value={formData.l1Manager}
                onChange={handleChange}
                icon={FiSearch}
              />
              <InputField
                label="L1 Manager Name"
                name="l1ManagerName"
                value={formData.l1ManagerName}
                onChange={handleChange}
              />
              <InputField
                label="L1 Manager Email Id"
                name="l1ManagerEmail"
                value={formData.l1ManagerEmail}
                onChange={handleChange}
              />
              <SearchInput
                label="L1 Manager Mobile Number"
                name="l1ManagerMobile"
                value={formData.l1ManagerMobile}
                onChange={handleChange}
                icon={BiPhoneCall}
              />
            </div>

            <div className="space-y-3">
              <SearchInput
                label="HR Manager"
                name="hrManager"
                value={formData.hrManager}
                onChange={handleChange}
                icon={FiSearch}
              />
              <InputField
                label="HR Name"
                name="hrName"
                value={formData.hrName}
                onChange={handleChange}
              />
              <InputField
                label="HR Email Id"
                name="hrEmail"
                value={formData.hrEmail}
                onChange={handleChange}
              />
              <SearchInput
                label="HR Mobile Number"
                name="hrMobile"
                value={formData.hrMobile}
                onChange={handleChange}
                icon={BiPhoneCall}
              />
            </div>
          </div>

          {/* Unit & Department */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 space-y-4 p-5 rounded-lg grid grid-cols-1 md:grid-cols-2 mt-3 gap-2">
            <SelectField
              label="Unit Name"
              name="unitName"
              value={formData.unitName}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Sub Department"
              name="subDepartment"
              value={formData.subDepartment}
              onChange={handleChange}
            >
              <option></option>
            </SelectField>
            <SelectField
              label="Grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
            <SelectField
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
            >
              <option>Select All</option>
            </SelectField>
          </div>

          {/* Tax & PAN */}
          <div className="bg-[#EFEFEF] dark:bg-[#E4E6EB]/10  p-5 rounded-lg mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <InputField
                label="PAN"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="p-2"
              />
              <SelectField
                label="Tax Regime"
                name="taxRegime"
                value={formData.taxRegime}
                onChange={handleChange}
                className="py-2 px-3"
              >
                <option>New Regime</option>
              </SelectField>
            </div>
            <p className="text-sm mt-2">Enter PAN in format: AAAPA1234A</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-1 w-full gap-2  ">
            <button className="bg-white dark:bg-[#E4E6EB]/10 border-2 text-[#8629DF] font-semibold text-[0.7rem] border-[#8629DF] py-1 rounded-sm w-1/5 my-3 ">
              Reset
            </button>
            <button
              onClick={() => onNext()}
              className="bg-[#8629DF] text-white font-semibold text-[0.7rem] w-1/5 py-1 my-3 cursor-pointer  rounded-sm"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;