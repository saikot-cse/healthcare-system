import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import stethoscope from "../../assets/icons/stethoscope.png";
import { Doctor } from '../AllDoctors/Doctor';
import { PrimaryButton } from '../Shared/PrimaryButton';
export const HomeDoctor = () => {
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
  return (
    <div className="mb-48">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-primary text-xl font-bold">Doctors</h3>
          <h2 className="text-3xl font-bold">Our Specialist Consaltants</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={stethoscope} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-12">
        {doctor?.slice(0,3).map((doc) => (
          <Doctor index={1} key={doc?._id} doctor={doc} />
        ))}
      </div>
      <Link to="/allDoctors">
        <div className="text-center my-5">
          <PrimaryButton>See All Doctors</PrimaryButton>
        </div>
      </Link>
    </div>
  )
}
