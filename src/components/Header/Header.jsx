import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../Redux/Slices/AuthSlice";
import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        height: "10vh",
        background: "#fff",
        boxShadow: "2px 0 5px 0 rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        color: "teal",
        zIndex: 10,
      }}
    >
      <h1>DoubtShare</h1>
      <Box>
        <h2>Welcome to Dashboard</h2>
      </Box>
      <Typography sx={{ display: "flex", alignItems: "center" }}>
        <AccountBoxIcon /> {user?.name.toUpperCase()}
        <span
          style={{
            margin: "0 0.3rem",
            color: "white",
            background: "teal",
            padding: "0.1rem",
            borderRadius: "0.3rem",
            textAlign: "center",
          }}
        >
          {user?.userType}
        </span>
      </Typography>

      <Button
        sx={{ height: "2rem" }}
        variant="contained"
        color="warning"
        onClick={handleLogout}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Header;
