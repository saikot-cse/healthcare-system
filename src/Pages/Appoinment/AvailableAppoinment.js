import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Loading } from "../Shared/Loading";
import { BookingModal } from "./BookingModal";
import { Service } from "./Service";

export const AvailableAppoinment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formatedDate = format(date, "PP");
  console.log(treatment);
  const [doctor, setDocrtor] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/doctor", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDocrtor(data));
  }, []);
  console.log(doctor)
  const { data: services, isLoading, refetch } = useQuery(["available", formatedDate], () => fetch(`http://localhost:5000/available?date=${formatedDate}`).then((res) => res.json()));
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="my-12 text-secondary text-xl font-bold text-center">Available Appointments on: {format(date, "PP")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {services?.map((service) => (
          <Service key={service._id} service={service} setTreatment={setTreatment} />
        ))}
      </div>
      {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment} refetch={refetch} doctor={doctor}/>}
    </div>
  );
};
