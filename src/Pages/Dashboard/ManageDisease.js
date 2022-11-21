import React, { useEffect, useState } from "react";
// import { useQuery } from "react-query";
// import { Loading } from "../Shared/Loading";
// import { DoctorsRow } from "./DoctorsRow";
// import { UserRow } from "./UserRow";

export const ManageDisease = () => {
  const [disease, setDisease] = useState();
  const [isDelete, setIsDelete] = useState(false);
  
  useEffect(() => {
    fetch("http://localhost:5000/diseases", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDisease(data));
  }, [isDelete]);
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/diseases/${id}`, {
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
      {/* <h2 className="text-2xl">All Disease: {disease.length}</h2> */}
      <div className="overflow-x-auto">
        <table className="table w-96">
          <thead>
            <tr>
              <th>Name</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {disease?.map((disease) => {
              return (
                // <DoctorsRow key={doctor._id} doctor={doctor}></DoctorsRow>
                <tr key={disease._id}>
                  <td>{disease.name}</td>
                  <td>
                    <button className="btn btn-xs bg-red-700" onClick={()=>handleDelete(disease?._id)}>Remove Disease</button>
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
