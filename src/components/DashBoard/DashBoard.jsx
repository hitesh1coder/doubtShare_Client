import React from "react";
import StudentDashboard from "./StudentDashBoard";
import Header from "../Header/Header";
import TutorDashBoard from "./tutorDashBoard";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <Header />
      {user.userType === "student" ? <StudentDashboard /> : <TutorDashBoard />}
    </div>
  );
};

export default DashBoard;
