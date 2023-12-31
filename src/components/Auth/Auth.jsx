import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Radio,
  Button,
  Tabs,
  Tab,
  TextField,
} from "@mui/material";
import HeroImage from "../../assets/images/bgImg.png.png";
import { useDispatch, useSelector } from "react-redux";
import {
  studentLogin,
  studentSignup,
  tutorLogin,
  tutorSignup,
} from "../../Redux/Slices/AuthSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state.user);

  const [userType, setUserType] = useState("student");
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setUserType(newValue);
  };

  const handleSignUpOrLogin = () => {
    setIsRegister(!isRegister);
  };

  const handleSignUp = () => {
    if (name && email && password) {
      dispatch(
        userType === "student"
          ? studentSignup({ name, email, password })
          : tutorSignup({ name, email, password })
      );
    } else {
      alert("Please fill all the fields");
    }
  };

  const handleLogin = () => {
    if (email && password) {
      dispatch(
        userType === "student"
          ? studentLogin({ email, password })
          : tutorLogin({ email, password })
      );
    } else {
      toast.error("Please fill all the fields");
    }
  };

  useEffect(() => {
    navigate(user ? "/dashboard" : "/");
  }, [user]);
  return (
    <div style={{ display: "flex" }}>
      <Container
        sx={{
          height: "100vh",
          width: "55%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          background: "#efefef",
        }}
      >
        <img
          src={HeroImage}
          alt="heroimg"
          style={{ width: "35rem", height: "35rem" }}
        />
      </Container>
      <Container
        sx={{
          height: "100vh",
          width: "45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#efefef",
        }}
        fixed
      >
        <Box
          sx={{
            width: "40vw",
            margin: "3rem auto",
            background: "#fff",
            padding: "0.5rem 1rem",
            textAlign: "center",
            borderRadius: "0.5rem",
            boxShadow:
              "3px 3px 16px 0 rgba(0, 0, 0, 0.3) ,-2px 2px 12px 0 rgba(0, 0, 0, 0.25) inset",
          }}
        >
          <h1>DoubtShare</h1>
          <label htmlFor="">Log In As :</label>
          <Tabs
            value={userType}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab value="student" label="User" />
            <Tab value="tutor" label="Tutor" />
          </Tabs>
        </Box>

        <Box
          sx={{
            bgcolor: "#fff",
            width: "30vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            borderRadius: "1rem",
            padding: "1rem",
            gap: "1rem",
            boxShadow:
              " 3px 2px 16px 0 rgba(0, 0, 0, 0.3) ,-2px 2px 12px 0 rgba(0, 0, 0, 0.25) inset",
          }}
        >
          <Box>
            <label htmlFor="radio-buttons">Log In </label>
            <Radio
              checked={!isRegister}
              onChange={handleSignUpOrLogin}
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
            <label htmlFor="radio-buttons">Sign Up</label>
            <Radio
              checked={isRegister}
              onChange={handleSignUpOrLogin}
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
          </Box>
          {isRegister && (
            <TextField
              onChange={(e) => setName(e.target.value)}
              required
              label="Name"
              type="text"
            />
          )}
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            required
            label="email"
            type="email"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            required
            label="Password"
            type="password"
          />

          <Button
            variant="contained"
            onClick={isRegister ? handleSignUp : handleLogin}
          >
            {isRegister ? "SignUp" : "Login"}
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
