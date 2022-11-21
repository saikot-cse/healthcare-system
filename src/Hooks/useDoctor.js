import { useEffect, useState } from "react";

export const useDoctor = (user) => {
  const [doctor, setDoctor] = useState(false);
  const [doctorLoading, setDoctorLoading] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/make-doctor/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setDoctor(data.doctor);
          setDoctorLoading(false);
        });
    }
  }, [user]);

  return [doctor, doctorLoading];
};
