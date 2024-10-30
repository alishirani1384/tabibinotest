"use client";
import { IoIosAddCircleOutline } from "react-icons/io";
import Input from "./components/Input";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function Home() {
  const options = [
    { value: "مرد", label: "مرد" },
    { value: "زن", label: "زن" },
  ];
  const [specs, setSpecs] = useState([
    { grad: "پزشکی", uni: "دانشگاه صنعتی", year: "1401" },
  ]);
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="نام (اختیاری)"
          placeHolder="شهر خود را انتخاب کنید"
          supportText="متن پشتیبانی"
        />
        <Input
          label="نام خانوادگی (اختیاری)"
          placeHolder="شهر خود را انتخاب کنید"
          supportText="متن پشتیبانی"
        />
        <Input
          label="کد ملی (اختیاری)"
          checkboxText="اتباع خارجی هستم"
          placeHolder="جهت دریافت نوبت وارد کردن کد ملی ضروری است"
          supportText="متن پشتیبانی"
        />
        <Input
          type="tel"
          label="شماره موبایل"
          placeHolder="0912 345 6789"
          supportText="متن پشتیبانی"
          isRequired
        />
        <Input
          type="date"
          label="تاریخ تولد (اختیاری)"
          supportText="متن پشتیبانی"
          placeHolder="1365/06/29"
        />
        <Input
          label="شماره نظام پزشکی"
          supportText="متن پشتیبانی"
          placeHolder="شماره نظام پزشکی خود را انتخاب کنید"
        />
        <Input
          type="select"
          options={options}
          label="جنسیت"
          placeHolder="جنسیت خود را انتخاب کنید"
          supportText="متن پشتیبانی"
        />
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1>تخصص ها</h1>{" "}
          <button
            onClick={() => setShowForm(true)}
            className="border-2 flex flex-row-reverse items-center gap-3 border-blue-400 text-blue-400 rounded-lg px-4 py-2"
          >
            افزودن <IoIosAddCircleOutline size={25} />
          </button>
        </div>
        {showForm && (
          <div className="grid grid-cols-2 gap-4 p-8 bg-slate-100 rounded-lg">
            <div className="col-span-2 w-1/2">
              <Input
                label="دکترای عمومی"
                supportText="متن پشتیبانی"
                placeHolder="نوع دکترا"
              />
            </div>
            <Input
              label="دانشگاه (اختیاری)"
              supportText="متن پشتیبانی"
              placeHolder="نام دانشگاه"
            />
            <Input
              label="سال فارغ التحصیلی (اختیاری)"
              type="tel"
              supportText="متن پشتیبانی"
              placeHolder="سال فارغ التحصیلی"
            />
          </div>
        )}
        {specs.map((spec, index) => (
          <div className="flex gap-3 w-full p-8 bg-slate-100 rounded-lg" key={index}>
            <div 
              className="flex-1 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 w-1/2">
                <Input
                  label="دکترای عمومی"
                  supportText="متن پشتیبانی"
                  placeHolder="نوع دکترا"
                  nvalue={spec.grad}
                />
              </div>
              <Input
                label="دانشگاه (اختیاری)"
                supportText="متن پشتیبانی"
                placeHolder="نام دانشگاه"
                nvalue={spec.uni}
              />
              <Input
                label="سال فارغ التحصیلی (اختیاری)"
                type="tel"
                supportText="متن پشتیبانی"
                placeHolder="سال فارغ التحصیلی"
                nvalue={spec.year}
              />
            </div>
            <div className="block min-w-[1px] min-h-full bg-gray-500 rounded-full"></div>
            <button
            onClick={() => setShowForm(true)}
            className="border-2 flex flex-row-reverse items-center gap-3 border-red-600 text-red-600 rounded-lg px-4 py-2 mt-auto"
          >
            حذف <AiOutlineDelete size={25} />
          </button>
          </div>
        ))}
      </div>
    </div>
  );
}
