import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";
export const AppoinmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-banner">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <img style={{ width: "40rem" }} src={chair} className="max-w-full rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};
