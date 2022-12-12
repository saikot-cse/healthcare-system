import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
// import Loading from "../../components/Loading";
import auth from "../../firebase.init";

export const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [newUser, setNewUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNewUser(data);
      });
  }, [newUser]);
  // if (loading) {
  //   return <Loading></Loading>;
  // }
  console.log(newUser);

  const handleProfile = (event) => {
    event.preventDefault();

    const profile = {
      name: user.name,
      email: user.email,
      education: event.target.education.value,
      location: event.target.location.value,
      phone: event.target.phone.value,
      link: event.target.link.value,
    };

    fetch(`http://localhost:5000/user/${profile?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire("Success!", "Profile Updated Successfully!", "success");

        fetch(`http://localhost:5000/user?email=${user?.email}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            setNewUser(data);
          });
      });
    event.target.reset();
  };

  return (
    <div className="grid grid-cols-1 w-full px-20">
      <h1 className="mt-[45vh] text-4xl text-center font-bold mb-5">My Profile</h1>
      <div className="mx-auto">
        <h2 className="card-title">Name : {user?.displayName}</h2>
        <h2 className="card-title">Email : {user?.email}</h2>
        <h2 className="card-title">Phone : {newUser?.phone}</h2>
        <h2 className="card-title">Address : {newUser?.location}</h2>
        <h2 className="card-title">Education : {newUser?.education}</h2>
        <h2 className="card-title">Link : {newUser?.link}</h2>
      </div>

      <div className="card  bg-base-100  flex justify-center items-center mt-16">
        <div className="card-body mt-8 0">
          <h2 className="card-title text-center text-3xl font-serif text-success font-extrabold  w-full max-w-xs">Update Profile</h2>
          <form onSubmit={handleProfile} className="form-control">
            <input type="text" name="name" disabled value={user?.displayName || ""} className="input input-bordered my-2 input-success w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email || ""} className="input input-bordered my-2 input-success w-full max-w-xs" />
            <input type="text" name="phone" required  placeholder="Your Number" className="input text-black input-bordered my-2 input-success w-full max-w-xs" />
            <input type="text" name="location"  required placeholder="Your Address" className="input text-black input-bordered my-2 input-success w-full max-w-xs" />
            <input type="text" name="education" required  placeholder="Education" className="input text-black input-bordered my-2 input-success w-full max-w-xs" />
            <input type="text" name="link" required  placeholder="LinkedIn profile link" className="input input-bordered my-2 input-success w-full max-w-xs text-black" />

            <input className="btn btn-primary w-full max-w-xs " type="Submit" value={"UPDATE"} />
          </form>
        </div>
      </div>
    </div>
  );
};
