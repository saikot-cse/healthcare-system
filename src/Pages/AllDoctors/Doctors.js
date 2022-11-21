import { useEffect, useState } from "react";
import { Doctor } from "./Doctor";
import stethoscope from "../../assets/icons/stethoscope.png";
export const Doctors = () => {
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
      <div className="flex justify-between items-center mt-0">
        <div>
          <h3 className="text-primary text-xl font-bold">Doctors</h3>
          <h2 className="text-3xl font-bold">Our Specialist Consaltants</h2>
        </div>
        <div>
          <img className="w-24 lg:w-48" src={stethoscope} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 mt-12">
        {doctor?.map((doc) => (
          <Doctor index={1} key={doc?._id} doctor={doc} />
        ))}
      </div>
    </div>
  );
};
