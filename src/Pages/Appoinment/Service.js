import React from "react";

export const Service = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title text-secondary text-2xl justify-center font-bold">{name}</h2>
        <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-sm text-red-600 font-bold">Try Another Date</span>}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <label htmlFor="booking-modal" className="btn btn-sm btn-secondary uppercase text-base-100 font-bold" disabled={slots.length === 0} onClick={() => setTreatment(service)}>
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};
