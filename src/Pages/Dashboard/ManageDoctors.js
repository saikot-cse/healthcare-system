import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { Loading } from "../Shared/Loading";
// import { DoctorsRow } from "./DoctorsRow";
// import { UserRow } from "./UserRow";

export const ManageDoctors = () => {
  // const {
  //   data: doctors,
  //   isLoading,
  //   refetch,
  // } = useQuery("doctors", () =>
  //   fetch("http://localhost:5000/doctor", {
  //     method: "GET",
  //   }).then((res) => res.json())
  // );
  // if (isLoading) {
  //   return <Loading></Loading>;
  // }
  const [doctor, setDocrtor] = useState();
  const [isDelete, setIsDelete] = useState(false);
  
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
  }, [isDelete]);
  const handleDelete = (email) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/doctor/${email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            setIsDelete(!isDelete)
          }
        });
    }
  };

  return (
    <div>
      {/* <h2 className="text-2xl">All Doctors: {doctor.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {doctor?.map((doctor) => {
              return (
                // <DoctorsRow key={doctor._id} doctor={doctor}></DoctorsRow>
                <tr key={doctor._id}>
                  <td>{doctor.name}</td>
                  <td>{doctor.email}</td>
                  <td>
                    <button className="btn btn-xs bg-red-700" onClick={()=>handleDelete(doctor?.email)}>Remove Doctor</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
