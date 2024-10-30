"use client";
import React, { useState } from "react";
import { FaRegCalendar } from "react-icons/fa";
import { Calendar, CalendarProvider } from "zaman";

interface InputProps {
  isRequired?: boolean;
  label: string;
  supportText?: string;
  checkboxText?: string;
  placeHolder: string;
  type?: "text" | "date" | "tel" | "select";
  options?: Array<{ value: string; label: string }>;
  nvalue?: string | number | readonly string[] | undefined;
}

function Input({
  isRequired,
  label,
  supportText,
  checkboxText,
  placeHolder,
  type = "text",
  options,
  nvalue,
}: InputProps) {
  const [calendarValue, setCalendarValue] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);
  const [value, setValue] = useState("");
  const persianDateFormatter = new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  if (type === "select") {
    return (
      <div className="w-full relative">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-3 outline-none border-2 border-slate-500 rounded-md"
        >
          <option value="" disabled>
            {placeHolder}
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label className="absolute z-10 top-0 right-4 bg-white -translate-y-3">
          {label}
          {isRequired && "*"}
        </label>
        {supportText && <p className="text-gray-500">{supportText}</p>}
        {checkboxText && (
          <label className="absolute top-0 z-10 left-5 bg-white -translate-y-3 flex items-center gap-1">
            <input type="checkbox" />
            {checkboxText}
          </label>
        )}
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder={placeHolder}
        onClick={() => type === "date" && setShowCalender(!showCalender)}
        value={
          nvalue ||
          (type === "date" && persianDateFormatter.format(calendarValue)) ||
          value
        }
        onChange={(e) =>
          (type == "date" && setValue(e.target.value)) ||
          setValue(e.target.value)
        }
        dir={type === "tel" ? "ltr" : "rtl"}
        className="w-full p-3 outline-none border-2 border-slate-500 rounded-md flex items-center flex-row-reverse"
      />
      {label && (
        <label className="absolute z-10 top-0 right-4 bg-white -translate-y-3">
          {label}
          {isRequired && "*"}
        </label>
      )}

      {checkboxText && (
        <label className="absolute top-0 z-10 left-5 bg-white -translate-y-3 flex items-center gap-1">
          <input type="checkbox" />
          {checkboxText}
        </label>
      )}
      {supportText && <p className="text-gray-500">{supportText}</p>}
      {type === "date" && (
        <button
          className="absolute top-1/2 left-6 -translate-y-[120%]"
          onClick={() => setShowCalender(!showCalender)}
        >
          <FaRegCalendar />
        </button>
      )}
      {showCalender && type == "date" && (
        <div className="absolute bottom-0 left-0 translate-y-full z-20">
          <CalendarProvider locale="fa">
            <Calendar
              defaultValue={calendarValue}
              onChange={(e) => {
                setCalendarValue(new Date(e.value));
                setShowCalender(false);
              }}
            />
          </CalendarProvider>
        </div>
      )}
    </div>
  );
}

export default Input;
