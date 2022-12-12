import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { About } from "./Pages/About/About";
import { Doctors } from "./Pages/AllDoctors/Doctors";
import { Appoinment } from "./Pages/Appoinment/Appoinment";
// import { Contact } from "./Pages/Contact/Contact";
import { AddDisease } from "./Pages/Dashboard/AddDisease";
import { AddDoctor } from "./Pages/Dashboard/AddDoctor";
import { AddReview } from "./Pages/Dashboard/AddReview";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ManageDisease } from "./Pages/Dashboard/ManageDisease";
import { ManageDoctors } from "./Pages/Dashboard/ManageDoctors";
import { MyAppoinment } from "./Pages/Dashboard/MyAppoinment";
import { MyProfile } from "./Pages/Dashboard/MyProfile";
import { Users } from "./Pages/Dashboard/Users";
import { Diseases } from "./Pages/Diseases/Diseases";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { RequireAdmin } from "./Pages/Login/RequireAdmin";
import { RequireAuth } from "./Pages/Login/RequireAuth";
import { SignUp } from "./Pages/Login/SignUp";
import { Notfound } from "./Pages/NotFound/Notfound";
import { Reviews } from "./Pages/Reviews/Reviews";
// import { Reviews } from "./Pages/Reviews/Reviews";
import { Navbar } from "./Pages/Shared/Navbar";
function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="diseases" element={<Diseases />} />
        <Route path="allDoctors" element={<Doctors />} />
        <Route path="allReviews" element={<Reviews />} />
        <Route
          path="Appoinment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route
            path="users"
            element={
              <RequireAdmin>
                <Users />
              </RequireAdmin>
            }
          />
          <Route index  element={<MyProfile />} />
          <Route path="appoinment" element={<MyAppoinment />} />
          <Route path="addReview" element={<AddReview />} />
          
          {/* <Route path="add" element={<AddDoctor />} />
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="addDisease" element={<AddDisease />} />
          <Route path="manageDisease" element={<ManageDisease />} /> */}

          <Route
            path="dashboard"
            element={
              <RequireAdmin>
                <Dashboard />
              </RequireAdmin>
            }
          />
          <Route path="add" element={<AddDoctor />} />
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="addDisease" element={<AddDisease />} />
          <Route path="manageDisease" element={<ManageDisease />} />
        </Route>
        {/* <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
