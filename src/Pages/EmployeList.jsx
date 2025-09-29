import React, { useState } from "react";
import { BsEye, BsPlusSquareFill } from "react-icons/bs";
import { FaEye, FaEdit, FaPlus } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import {
  HiAdjustmentsHorizontal,
  HiOutlineDocument,
  HiOutlineEye,
} from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import ViewIcon from "../Assets/ViewIcon.png";
import EditIcon from "../Assets/EditIcon.png";
import DeleteIcon from "../Assets/DeleteIcon.png";
import SearchIcon from "../Assets/Searchicon.png";
import { MdArrowDropDown } from "react-icons/md";
import { LuRefreshCw } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { CiExport, CiImport } from "react-icons/ci";
import { Delete, Eye, Pencil, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
const EmployeList = () => {
  const [open, setOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const employees = [
    {
      id: "2341421",
      name: "Ahmed Rashdan",
      department: "IT Department",
      designation: "Help Desk Executive",
      doj: "29 July 2023",
      manager: "Ahmed Rashdan",
      profilePic: "https://i.pravatar.cc/106",
    },
    {
      id: "3411421",
      name: "Ali Alhamdan",
      department: "Marketing",
      designation: "Senior Executive",
      doj: "29 July 2023",
      manager: "Ahmed Rashdan",
      profilePic: "https://i.pravatar.cc/105",
    },
    {
      id: "2341121",
      name: "Mona Alghafar",
      department: "Design",
      designation: "Senior Manager",
      doj: "29 July 2023",
      manager: "Ahmed Rashdan",
      profilePic: "https://i.pravatar.cc/104",
    },
    {
      id: "2341421",
      name: "Moustafa Adel",
      department: "Development",
      designation: "Director",
      doj: "29 July 2023",
      manager: "Ahmed Rashdan",
      profilePic: "https://i.pravatar.cc/103",
    },
    {
      id: "2341421",
      name: "Jhon Neleson",
      department: "Sales",
      designation: "Director",
      doj: "29 July 2023",
      manager: "Ahmed Rashdan",
      profilePic: "https://i.pravatar.cc/102",
    },
    
  ];

const filterData = employees.filter(item=>item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
  return (
    <div className="p-2 sm:p-4 ">
      {/* Top Actions */}
      <div className="flex flex-row sm:flex-row justify-between gap-3 mt-2 mb-8 w-full  ">
        {/* Search Box
        <div className="flex gap-2  rounded-sm px-2 items-center shadow drop-shadow-xs border border-gray-300  w-full xl:w-[455px] xl:h-[50px]">
          <input
            type="text"
            placeholder="Search here"
            className="px-3 py-2 w-full lg:w-90 xl:w-128 text-sm outline-none"
          />
          <IoMdSearch className="w-7 h-7" />
        </div> */}
        <h1 className="text-xl sm:text-2xl font-semibold text-[#252C58] dark:text-gray-50 ">
          Employee List
        </h1>

        {/* Buttons */}
        <div className="flex gap-0 sm:gap-3">
          <div className="bg-[#8629DF] text-white text-[0.7rem] px-4  w-full rounded-sm flex justify-center items-center gap-1 py-1  ">
            <Link to="/info" className="flex items-center justify-center gap-1 text-[0.7rem]  md:text-[0.8rem]">
              <AiOutlinePlus className="md:w-4 md:h-4 font-semibold" />
              Add Employee
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex  md:justify-around  gap-2 md:gap-2 w-full flex-wrap-reverse md:flex-nowrap">
        <div className="flex gap-2  rounded-sm px-3 items-center shadow drop-shadow-xs border border-gray-300 dark:border-gray-500 dark:bg-gray-800 w-full md:w-[70%]  xl:h-[35px]">
          <input
            type="text"
            placeholder="Search here"
            onChange={(e) => setSearchQuery(e.target.value)}

            className="px-3 py-2 w-full text-xs  md:text-[0.8rem] outline-none"
          />
          <IoMdSearch className="w-6 h-6" />
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-[#8629DF] dark:bg-gray-800 dark:border dark:border-gray-500 text-white cursor-pointer text-xs md:text-[0.7rem] px-4 p-1 md:p-0  min-w-[50%]  md:min-w-[5rem]  rounded-sm flex items-center justify-center gap-1"
        >
          <HiAdjustmentsHorizontal className="md:w-4 md:h-4" />
          Filter
        </button>
        <button
         className="bg-[#8629DF] dark:bg-gray-800 dark:border dark:border-gray-500 text-white cursor-pointer text-[0.7rem] md:text-[0.7rem] px-4 p-2 md:p-0 min-w-full md:min-w-[8.5rem] rounded-sm flex items-center justify-center gap-2"
         >
          <CiExport className="md:w-4 md:h-4" />
          Bulk Export
        </button>
        <button
         className="bg-[#8629DF] dark:bg-gray-800 dark:border dark:border-gray-500 text-white cursor-pointer text-[0.7rem] md:text-[0.7rem] px-4 p-2  md:p-0 min-w-full md:min-w-[8.5rem] rounded-sm flex items-center justify-center gap-2"
         >
          <CiImport className="md:w-4 md:h-4" />
          Bulk Import
        </button>
      </div>

      <div className="rounded-xl mt-5 shadow drop-shadow-xs p-4 sm:p-4 border border-gray-200 dark:border-gray-600">
        <h2 className="text-lg sm:text-[1.2rem] text-[#252C58] dark:text-gray-400 font-semibold mb-8">
          List of Employee
        </h2>
       <div className="overflow-x-auto no-scrollbar  ">
          <div
            className="text-[0.7rem] min-w-[1050px] sm:min-w-full sm:text-[0.8rem]  font-semibold text-black dark:text-gray-50 rounded-md border-y border-gray-100 dark:border-gray-700 bg-[#E4DCF1] dark:bg-gray-900 py-4 px-4 min-h-[44px] "
            style={{
              display: "grid",
              gridTemplateColumns:
                "60px 90px 1.5fr 1.5fr 1.5fr 1.2fr 1.6fr 50px 50px 50px",
              gap: "6px",
              alignItems: "center",
            }}
          >
            <div>Profile</div>
            <div>ID</div>
            <div>Employee</div>
            <div className="flex items-center">
              Department
              <MdArrowDropDown className="w-4 h-4 text-gray-400 ml-1" />
            </div>
            <div className="flex items-center">
              Designation
              <MdArrowDropDown className="w-4 h-4 text-gray-400 ml-1" />
            </div>
            <div>DOJ</div>
            <div>Reporting manager</div>
            <div className="text-center">View</div>
            <div className="text-center">Edit</div>
            <div className="text-center">Delete</div>
          </div>

          {/* Rows */}
          {filterData.map((emp, index) => (
            <div
              key={index}
              className="min-w-[1050px] sm:min-w-full  text-[0.7rem] sm:text-[0.7.2rem] py-3 px-3 border-b border-gray-100 dark:border-gray-700  dark:text-gray-400 dark:bg-[#A1A1AA]/5 "
              style={{
                display: "grid",
                gridTemplateColumns:
                  "60px 90px 1.5fr 1.5fr 1.5fr 1.2fr 1.6fr 50px 50px 50px",
                gap: "6px",
                alignItems: "center",
              }}
            >
              {/* Profile (Image or Initials) */}
              {emp.profilePic ? (
                <img
                  src={emp.profilePic}
                  alt={emp.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white dark:text-gray-400 font-semibold`}
                  style={{
                    backgroundColor: emp.bgColor || "#9376CA",
                  }}
                >
                  {emp.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                    .slice(0, 2)}
                </div>
              )}

              <div className="font-semibold text-md">{emp.id}</div>
              <div className="font-semibold text-md">{emp.name}</div>
              <div>{emp.department}</div>
              <div>{emp.designation}</div>
              <div>{emp.doj}</div>
              <div>{emp.manager}</div>


      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex justify-center cursor-pointer">
            <Eye
              className="h-4 w-4 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transform transition-transform duration-300 hover:scale-110 hover:shadow-xl"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>View Details</p>
        </TooltipContent>
      </Tooltip>

 <Tooltip>
        <TooltipTrigger asChild>
        
              <div className="flex justify-center cursor-pointer">
                <Pencil
                 className="h-4 w-4 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transform transition-transform duration-300 hover:scale-120 hover:shadow-xl"/>

              </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Edit</p>
        </TooltipContent>
      </Tooltip>

 <Tooltip>
        <TooltipTrigger asChild>
        
              <div className="flex justify-center cursor-pointer">
                <Trash2
                 className="h-4 w-4 text-black hover:text-gray-600 dark:text-white dark:hover:text-gray-400 transform transition-transform duration-300 hover:scale-120 hover:shadow-xl"/>       
                       </div>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>Delete</p>
        </TooltipContent>
      </Tooltip>

      



            
            </div>

          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-end items-center mt-6 text-xs sm:text-sm text-gray-600 gap-3 flex-wrap">
          {/* Left: Pagination numbers */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Back button (disabled) */}
            <button className="px-3 py-1 border rounded border-gray-300 hover:bg-[#8629DF] hover:text-white">
              &lt; Back
            </button>

            {/* Page numbers */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <button
                key={num}
                className={`px-3 py-1 border rounded ${
                  num === 1
                    ? "bg-[#8629DF] text-white border-[#8629DF]"
                    : "border-gray-300 hover:bg-[#9376CA] hover:text-white"
                }`}
              >
                {num}
              </button>
            ))}

            {/* Ellipsis */}
            <span className="px-2">...</span>

            {/* Last page */}
            <button className="px-3 py-1 border rounded border-gray-300 hover:bg-[#9376CA] hover:text-white">
              25
            </button>

            {/* Next button */}
            <button className="px-3 py-1 border rounded border-gray-300 hover:bg-[#9376CA] hover:text-white">
              Next &gt;
            </button>
          </div>

          {/* Right: Result per page */}
          <div className="flex gap-1.5">
            <p className="text-black dark:text-gray-400 mt-1">
              Results per page{" "}
            </p>
            <select className="border rounded px-2 py-1 dark:bg-gray-800">
              <option>50</option>
              <option>100</option>
              <option>150</option>
            </select>
          </div>
          
        </div>
  {/* Footer */}
        <div className="flex justify-end w-full text-black dark:text-gray-400 text-xs sm:text-sm mt-3">
          1-50 of 125
        </div>
      
      </div>

      {open && (
        <div className="fixed inset-0 flex  justify-end top-0 right-0 z-50  ">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl  p-6 sm:px-10 py-[50px] relative overflow-y-auto  max-h-[752px]">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Heading */}
            <h1 className="text-[20px]  text-[#58585A] font-bold mb-6 mt-4">
              Employee Searching
            </h1>

            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Unit Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit Name
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:ring-2 focus:ring-[#9376CA] focus:border-[#9376CA]">
                  <option>Select All</option>
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Department
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select Department</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select All</option>
                </select>
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Designation
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select Designation</option>
                </select>
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select Unit</option>
                </select>
              </div>

              {/* Grade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select Grade</option>
                </select>
              </div>

              {/* Salary Basis */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Basis
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select All</option>
                </select>
              </div>

              {/* Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Level
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>Select Level</option>
                </select>
              </div>

              {/* Present Department */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Present Department
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm">
                  <option>All</option>
                </select>
              </div>

              {/* EMP Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EMP Code
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
                />
              </div>

              {/* Name Switch + Input */}
              <div>
                <div className="flex rounded-4xl overflow-hidden border-2 border-gray-200 p-1 w-full mt-4 ">
                  <button className="px-6 py-2 w-1/2 rounded-4xl bg-[#9376CA] text-white text-sm font-medium">
                    First Name
                  </button>
                  <button className="px-6 py-2 w-1/2 rounded-4xl text-gray-600 text-sm font-medium">
                    Last Name
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EMP Name
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="flex-1 border border-gray-300 rounded-md py-2 px-3 text-sm w-full"
                />
                <div className=" flex gap-3 mt-3">
                  <input
                    type="checkbox"
                    id="finalized"
                    className="w-4 h-4 mt-1"
                  />
                  <label htmlFor="finalized" className="text-md text-gray-700">
                    Finalized Employee
                  </label>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button className="flex items-center justify-center gap-2 bg-[#9376CA] text-white px-5 py-2 rounded-md shadow hover:bg-[#7a5fb8]">
                <img src={SearchIcon} className="w-5 h-5" /> Search
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#E5E7EB] border border-gray-300 px-5 py-2 rounded-md shadow text-gray-700 hover:bg-gray-100">
                <LuRefreshCw /> Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeList;
