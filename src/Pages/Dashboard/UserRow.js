import React, { useState } from "react";
import { toast } from "react-toastify";

export const UserRow = ({ user, refetch }) => {
  
  const [isDelete, setIsDelete] = useState(false);
  const { email, role } = user;
  const makeDoctor = () => {
    fetch(`http://localhost:5000/user/make-doctor/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an doctor");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an doctor`);
        }
      });
  };
  const handleDelete = (email) => {
    console.log(email);
    
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
            refetch();
            setIsDelete(!isDelete)
          }
        });
    }
  };
  return (
    <tr>
      <td>{email}</td>
      <td>
        {role !== "doctor" && (
          <button onClick={makeDoctor} className="btn btn-xs">
            Make Doctor
          </button>
        )}
      </td>
      <td>
      <button className="btn btn-xs bg-red-700" onClick={()=>handleDelete(user?.email)}>Remove User</button>
      </td>
    </tr>
  );
};
