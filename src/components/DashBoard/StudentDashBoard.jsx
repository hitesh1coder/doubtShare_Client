// StudentDashboard.js
import React from "react";

import { Box, Container } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

import { DoubtLists, OngoingSessions, CreateDoubtModal } from "../index";
import Header from "../Header/Header";

const StudentDashboard = () => {
  return (
    <div>
      <Header />
      <Container
        sx={{
          margin: "1.5rem auto",
          padding: "0.5rem",
        }}
      >
        <Box>
          <h3>Have some Confusion..!</h3>
          <CreateDoubtModal />
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "1px 2px 10px 2px rgba(0, 0, 0, 0.2)",
          margin: "1.5rem auto",
          padding: "0.8rem",
        }}
      >
        <Box>
          <h3>
            <HistoryIcon /> Doubt History
          </h3>
          <DoubtLists />
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "1px 2px 10px 2px rgba(0, 0, 0, 0.2)",
          margin: "1.5rem auto",
          padding: "0.8rem",
        }}
      >
        <Box>
          <h3>Ongoing Session</h3>
          <OngoingSessions />
        </Box>
      </Container>
    </div>
  );
};

export default StudentDashboard;
