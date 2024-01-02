import React, { useEffect } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { Auth, DashBoard } from "./components/index";
import PrivateRouts from "./PrivateRouts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Router>
      <div className="main_container">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route element={<PrivateRouts />}>
            <Route path="/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
