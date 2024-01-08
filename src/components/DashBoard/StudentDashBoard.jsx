// StudentDashboard.js
import React from "react";

import { Box, Container } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

import {
  Header,
  DoubtLists,
  OngoingSessions,
  CreateDoubtModal,
} from "../index";

const StudentDashboard = () => {
  return (
    <div>
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
          width: "100",
          minWidth: "90vw",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "1px 2px 10px 2px rgba(0, 0, 0, 0.2)",
          margin: "1.5rem auto",
          borderRadius: "0.3rem",
        }}
      >
        <Box>
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
            <HistoryIcon /> Doubt History
          </h2>
          <DoubtLists />
        </Box>
      </Container>

      <Container
        sx={{
          display: "flex",
          width: "100",
          minWidth: "90vw",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
          boxShadow: "1px 2px 10px 2px rgba(0, 0, 0, 0.2)",
          margin: "1.5rem auto",
          borderRadius: "0.3rem",
        }}
      >
        <Box>
          <h2 style={{ textAlign: "center", margin: "1rem 0" }}>
            Ongoing Session
          </h2>
          <OngoingSessions />
        </Box>
      </Container>
    </div>
  );
};

export default StudentDashboard;
