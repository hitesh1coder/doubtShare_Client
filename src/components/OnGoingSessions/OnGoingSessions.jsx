// OngoingSessions.js
import React from "react";
import { Card, CardContent, Chip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const OngoingSessions = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div>
      <Card
        sx={{
          background: "rgb(222, 255, 247)",
          margin: "0.5rem",
          minWidth: "70vw",
          maxWidth: 700,
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name}
          </Typography>
          <Typography sx={{ minHeight: "2rem" }} variant="h5" component="div">
            How is hydropower harnessed?
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            Created At Created At 2023-12-29T13:23:08.588Z
          </Typography>
          <Chip sx={{ width: "15rem" }} label="Science" variant="outlined" />

          <span style={{ textAlign: "right" }}>
            Tutor Name is : Mr. Sushant Singh
          </span>
          <Typography
            sx={{ background: "#fff", textAlign: "right", padding: "1rem" }}
            variant="h5"
            component="div"
          >
            Potential energy of water stored in a dam is converted into kinetic
            energy of falling water and then, this kinetic energy is converted
            into electrical energy.
          </Typography>
          <Typography sx={{ fontSize: 10, textAlign: "right" }}>
            Updated At Created At 2023-12-30T16:13:42.588Z
          </Typography>

          <Chip sx={{ width: "7rem" }} color="primary" label="pending" />
        </CardContent>
      </Card>
      <Card
        sx={{
          background: "rgb(218, 255, 223)",
          margin: "0.5rem",
          minWidth: 315,
          maxWidth: 700,
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name}
          </Typography>
          <Typography sx={{ minHeight: "2rem" }} variant="h5" component="div">
            What is meant by the term Biomass?
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            Created At Created At 2023-12-29T17:33:12.188Z
          </Typography>
          <Chip sx={{ width: "15rem" }} label="Science" variant="outlined" />

          <span style={{ textAlign: "right" }}>
            Tutor Name is : Mr. Arnav Sinha
          </span>
          <Typography
            sx={{ background: "#fff", textAlign: "right", padding: "1rem" }}
            variant="h5"
            component="div"
          >
            Cow-dung, various plant materials like the residue after harvesting
            the crops, vegetable wastes and sewage which can be decomposed in
            the absence of oxygen is called biomass.
          </Typography>
          <Typography sx={{ fontSize: 10, textAlign: "right" }}>
            Updated At Created At 2023-12-29T18:25:12.125Z
          </Typography>
          <Chip sx={{ width: "7rem" }} color="success" label="Resolved" />
        </CardContent>
      </Card>
    </div>
  );
};

export default OngoingSessions;
