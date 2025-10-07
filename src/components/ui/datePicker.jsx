import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // import default styles
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DatePickerField = ({ label, name, value, onChange }) => {
  const [date, setDate] = useState(value ? new Date(value) : null);

  useEffect(() => {
    if (date) {
      onChange({
        target: { name, value: date.toISOString().split("T")[0] }, // YYYY-MM-DD
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
            variant="outline"
            className={cn(
              "w-full justify-start text-left font-normal py-1.5 h-[1.9rem] transition-all duration-200",
              "rounded-sm border border-gray-300 dark:border-gray-700",
              "bg-white dark:bg-gray-800",
              "hover:bg-gray-50 dark:hover:bg-gray-800",
              !date && "text-gray-400 dark:text-gray-500 text-[0.7rem]"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500 text-[0.7rem] dark:text-gray-400" />
            {date ? (
              <span className="text-gray-900 dark:text-gray-400 text-[0.7rem]">
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
            onChange={setDate}
            value={date}
              prev2Label={null}
  next2Label={null}
            className="rounded-lg text-[0.7rem] dark:text-gray-800 "
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerField;
