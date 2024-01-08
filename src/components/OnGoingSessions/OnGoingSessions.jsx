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
          background:
            "linear-gradient( 109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1% )",
          margin: "0.5rem",
          minWidth: 315,
          maxWidth: 850,
          borderRadius: "1rem",
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
            sx={{
              background: "#fff",
              textAlign: "right",
              padding: "1rem",
              borderRadius: "0.5rem",
            }}
            variant="p"
            component="div"
          >
            Potential energy of water stored in a dam is converted into kinetic
            energy of falling water and then, this kinetic energy is converted
            into electrical energy.
          </Typography>
          <Typography sx={{ fontSize: 10, textAlign: "right" }}>
            Updated At Created At 2023-12-30T16:13:42.588Z
          </Typography>
          <Typography sx={{ minHeight: "2rem" }} variant="h5" component="div">
            where is hydropower harnessed energy used?
          </Typography>
          <Typography
            sx={{
              background: "#fff",
              textAlign: "right",
              padding: "1rem 0.2rem",
              borderRadius: "0.5rem",
            }}
            variant="p"
            component="div"
          >
            It is used for for a wide range of purposes. As a source of energy
            for a household or business.
          </Typography>
          <Typography sx={{ fontSize: 10, textAlign: "right" }}>
            Updated At Created At 2024-1-4T05:14:22.588Z
          </Typography>

          <Chip sx={{ width: "7rem" }} color="success" label="Ongoing" />
        </CardContent>
      </Card>
    </div>
  );
};

export default OngoingSessions;
