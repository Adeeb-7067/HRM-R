import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import DatePickerField from "@/components/ui/datePicker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { BsFolder } from 'react-icons/bs';

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
        className={`w-full  px-2 rounded-sm py-1.5 text-[0.7rem] ${className}`}
      >
        {children}
      </select>
    </div>
  );
};

const Datefeild = ({ label, name, value, onChange }) => {
  const [date, setDate] = useState(value ? new Date(value) : undefined);

  useEffect(() => {
    if (date) {
      onChange({
        target: { name, value: date.toISOString().split("T")[0] }, // keep YYYY-MM-DD
      });
    }
  }, [date]);

  return (
    <div className="flex flex-col space-y-1 w-full">
      {/* Label */}
      <label className="text-[0.7rem] font-normal text-black dark:text-gray-200">
        {label}
      </label>

      {/* Date Picker */}
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="Default"
            className={cn(
              "w-full justify-start text-left font-normal  transition-all duration-200",
              "rounded-sm ",
              !date && "text-gray-400 dark:text-gray-500"
            )}
          >
            <CalendarIcon className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            {date ? (
              <span className="text-gray-900 dark:text-gray-100">
                {format(date, "PPP")}
              </span>
            ) : (
              <span>Select a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-auto p-3 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
            className="rounded-lg"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const SalaryAssigment = ({ onNext , onPrev }) => {
  // Form data state
  const [formData, setFormData] = useState({
    salaryTemplate: "",
    currency: "",
    EffectiveFromDate: "",
    EffectiveToDate: "",
    payHeads: [
      {
        name: "Basic",
        fromDate: "21 July 2025",
        toDate: "21 July 2025",
        formula: "",
        monthly: "1000",
        annual: "12000",
        remarks: "40% as per metro city norms",
        checked: true,
      },
      {
        name: "HRA",
        fromDate: "21 July 2025",
        toDate: "21 July 2025",
        formula: "",
        monthly: "500",
        annual: "6000",
        remarks: "Calculated based on unused leaves (carry-forwarded)",
        checked: true,
      },
      {
        name: "Transport",
        fromDate: "",
        toDate: "",
        formula: "",
        monthly: "",
        annual: "",
        remarks: "",
        checked: false,
      },
      {
        name: "SPL Allowance",
        fromDate: "",
        toDate: "",
        formula: "",
        monthly: "",
        annual: "",
        remarks: "",
        checked: false,
      },
    ],
    oneTimePayments: [
      {
        id: 1,
        name: "Joining Bonus",
        amount: 50000,
        frequency: "2",
        isTag: true,
        checked: true,
      },
      {
        id: 2,
        name: "Joining Bonus",
        amount: 25000,
        frequency: "April 2025",
        isTag: false,
        checked: false,
      },
      {
        id: 3,
        name: "Joining Bonus",
        amount: 25000,
        frequency: "April 2025",
        isTag: false,
        checked: false,
      },
    ],
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePayHeadChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedPayHeads = [...prevData.payHeads];
      updatedPayHeads[index] = {
        ...updatedPayHeads[index],
        [field]: value,
      };
      return {
        ...prevData,
        payHeads: updatedPayHeads,
      };
    });
  };

  const handleOneTimePaymentChange = (index, field, value) => {
    setFormData((prevData) => {
      const updatedPayments = [...prevData.oneTimePayments];
      updatedPayments[index] = {
        ...updatedPayments[index],
        [field]: value,
      };
      return {
        ...prevData,
        oneTimePayments: updatedPayments,
      };
    });
  };

  const handleNotesChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      notes: e.target.value,
    }));
  };

  function SalaryTable() {
    return (
      <div className="w-full flex justify-center">
        <div className=" w-full overflow-x-auto border border-gray-300 dark:bg-[#E4E6EB]/10 rounded-lg shadow-sm">
          <table className="min-w-[800px] w-full text-[0.7rem] text-left border-collapse">
            {/* Table Head */}
            <thead className="bg-[#F2F2F7] dark:bg-gray-500 text-black font-semibold divide-x divide-gray-200">
              <tr>
                <th className="text-[0.8rem] px-2 py-1.5 min-w-[130px]">Pay Head Name</th>
                <th className="text-[0.8rem] px-4 py-1.5">From Date</th>
                <th className="text-[0.8rem] px-4 py-1.5">To Date</th>
                <th className="text-[0.8rem] px-4 py-1.5 min-w-[140px]">Formula</th>
                <th className="text-[0.8rem] px-4 py-1.5">Monthly Amount</th>
                <th className="text-[0.8rem] px-4 py-1.5">Annual Amount</th>
                <th className="text-[0.8rem] px-4 py-1.5">Remarks</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 text-gray-700 dark:text-gray-200">
              {formData.payHeads.map((item, idx) => (
                <tr key={idx} className="divide-x divide-gray-200">
                  {/* Pay Head Name with Checkbox */}
                  <td className="px-2  py-1.5 flex-1 space-x-2   justify-evenly   text-[0.7rem] gap-4">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={(e) => handlePayHeadChange(idx, "checked", e.target.checked)}
                      className="h-3 w-3  accent-[#58585A]"
                    />
                    <span className="text-[13px]">{item.name}</span>
                  </td>

                  {/* From Date */}
                  <td className="px-3 py-1.5 text-center">
                    {item.fromDate ? (
                      item.fromDate
                    ) : (
                      <Datefeild
                        value={item.fromDate}
                        onChange={(e) => handlePayHeadChange(idx, "fromDate", e.target.value)}
                        className="rounded-md px-2 py-1 text-sm w-full"
                      />
                    )}
                  </td>

                  {/* To Date */}
                  <td className="px-4 py-1.5 text-center">
                    {item.toDate ? (
                      item.toDate
                    ) : (
                      <Datefeild
                        value={item.toDate}
                        onChange={(e) => handlePayHeadChange(idx, "toDate", e.target.value)}
                        className="rounded-md px-2 py-1 text-sm w-full"
                      />
                    )}
                  </td>

                  {/* Formula */}
                  <td className="px-1 py-1.5">
                    <SelectField 
                      value={item.formula}
                      onChange={(e) => handlePayHeadChange(idx, "formula", e.target.value)}
                    >
                      <option value="">Select Formula</option>
                      
                    </SelectField>
                  </td>

                  {/* Monthly Amount */}
                  <td className="px-4 py-1.5">
                    {item.monthly ? (
                      item.monthly
                    ) : (
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        className="rounded-md px-2 py-1 text-sm w-full"
                        value={item.monthly}
                        onChange={(e) => handlePayHeadChange(idx, "monthly", e.target.value)}
                      />
                    )}
                  </td>

                  {/* Annual Amount */}
                  <td className="px-4 py-1.5">
                    {item.annual ? (
                      item.annual
                    ) : (
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        className="rounded-md px-2 py-1 text-sm w-full"
                        value={item.annual}
                        onChange={(e) => handlePayHeadChange(idx, "annual", e.target.value)}
                      />
                    )}
                  </td>

                  {/* Remarks */}
                  <td className="px-4 py-1.5 text-xs">
                    {item.remarks ? (
                      item.remarks
                    ) : (
                      <input
                        type="text"
                        placeholder="Enter your Remarks"
                        className="rounded-md px-2 py-1 text-sm w-full"
                        value={item.remarks}
                        onChange={(e) => handlePayHeadChange(idx, "remarks", e.target.value)}
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  const PayTable = () => {
    return (
      <div className="w-full mx-auto mt-6 overflow-x-auto bg-white dark:bg-[#E4E6EB]/10  border border-gray-300 rounded-lg">
        <div className="    ">
          <table className="w-full text-[0.8rem]  border-separate border-spacing-0 text-center">
            <thead>
              <tr className="bg-[#F2F2F7] dark:bg-gray-500 text-black  text-[0.8rem]">
                <th className="px-2 py-3 text-[0.8rem] text-left font-semibold rounded-tl-lg">
                  Pay Head Name
                </th>
                <th className="px-6 py-3 font-semibold">Amount</th>
                <th className="px-6 py-3 font-semibold rounded-tr-lg">
                  Payment Frequency
                </th>
              </tr>
            </thead>
            <tbody className="dark:text-gray-200 text-[0.7rem]">
              {formData.oneTimePayments.map((row, index) => (
                <tr key={row.id} className="text-center">
                  <td className="px-6 py-4 flex text-center gap-2">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4" 
                      checked={row.checked}
                      onChange={(e) => handleOneTimePaymentChange(index, "checked", e.target.checked)}
                    />
                    <span className="font-medium">{row.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    <input
                      type="text"
                      value={row.amount}
                      onChange={(e) => handleOneTimePaymentChange(index, "amount", e.target.value)}
                      className="w-20 text-center border rounded"
                    />
                  </td>
                  <td className="px-6 py-4">
                    {row.isTag ? (
                      <span className="border border-purple-400 rounded-md px-2 py-1 text-purple-600 font-medium">
                        {row.frequency}
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={row.frequency}
                        onChange={(e) => handleOneTimePaymentChange(index, "frequency", e.target.value)}
                        className="w-32 text-center border rounded"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#EFEFEF] dark:bg-[#E4E6EB]/10 dark:border-white dark:border gap-5 p-3 pt-10 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            label="Salary Template"
            name="salaryTemplate"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 font-normal"
            value={formData.salaryTemplate}
            onChange={handleChange}
          >
            <option value="">Select Template</option>
            <option value="template1">Template 1</option>
            <option value="template2">Template 2</option>
          </SelectField>
          <SelectField
            label="Currency"
            name="currency"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700  font-normal"
            value={formData.currency}
            onChange={handleChange}
          >
            <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="INR">INR</option>
          </SelectField>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <DatePickerField
              label='Effective From Date'
              type='date'
              name='EffectiveFromDate'
              value={formData.EffectiveFromDate}
              onChange={handleChange}
            />
          </div>
          <div>
            <DatePickerField
              label='Effective to Date'
              type='date'
              name='EffectiveToDate'
              value={formData.EffectiveToDate}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <SalaryTable />
      </div>
      <div className="mt-8">
        <h1 className="font-semibold text-xl ">One Time Payment</h1>
        <div className="mt-4">
          <PayTable />
        </div>
      </div>
      <div className="mt-8 ">
        <div>
          <h1 className="font-semibold text-sm mb-4  ">Notes/Remarks</h1>
          <div>
            <textarea
              className="w-full h-[220px] p-2 text-[0.7rem] border border-gray-300 dark:bg-[#E4E6EB]/10 text-black dark:text-gray-200 shadow rounded-md"
              placeholder="Write Here ..."
              value={formData.notes}
              onChange={handleNotesChange}
            />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end  mt-1 gap-1 ">
        
        <div className="w-1/2 flex justify-end gap-1 text-[0.8rem]">

        <button
                 onClick={() => { onPrev() }}

        // className="w-1/5 bg-[#9376CA] rounded-sm text-white py-1 my-4"
                className="w-1/5 border-2 border-[#9376CA] rounded-sm text-[0.7rem] cursor-pointer text-[#9376CA] py-1 my-4"


        >
          Previous
        </button>
        <button onClick={() => { onNext() }} className="w-1/5 bg-[#9376CA] cursor-pointer rounded-sm text-[0.7rem] text-white py-1 my-4">
          Next
        </button>
        <button
        className="w-1/5 border-2 border-[#9376CA] rounded-sm text-[0.7rem] text-[#9376CA] py-1 my-4">
          Reset
        </button>
        <button className="w-1/4 border-2 border-red-500 rounded-sm text-[0.7rem] text-red-500 py-1 my-4">
          Delete
        </button>
        </div>

      </div>
    </div>
  );
};

export default SalaryAssigment;