import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
export const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const [user] = useAuthState(auth);
  const { _id, name, slots } = treatment;
  const formatedDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientname: user.displayName,
      phone: e.target.phone.value,
      fee: 1000,
    };

    fetch("https://powerful-gorge-69210.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formatedDate} at ${slot}`);
        } else {
          toast.error(`Already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-2xl text-secondary text-center mb-5">Booking for: {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
            <input type="text" value={format(date, "PP")} readOnly disabled className="input input-bordered input-secondary w-full max-w-xs" />
            <select name="slot" className="select select-secondary w-full max-w-xs">
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="number" name="phone" placeholder="Your Number" className="input input-bordered input-secondary w-full max-w-xs" />
            <input type="submit" value="BOOK" className="btn btn-secondary w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};
