import { Card, CardContent, Chip, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const DoubtCard = ({ doubt }) => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <Card
        sx={{
          background: "rgb(250, 252, 230)",
          margin: "0.5rem",
          width: "20rem",
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}
        >
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {user.name}
          </Typography>
          <Typography
            sx={{ background: "#fff", padding: "0.4rem" }}
            variant="h5"
            component="div"
          >
            {doubt.text}
          </Typography>
          <Typography sx={{ fontSize: 10 }}>
            Created At {doubt.createdAt}
          </Typography>
          <Chip label={doubt.subject} variant="outlined" />

          <Chip
            sx={{ width: "7rem" }}
            color={doubt.isResolved ? "success" : "warning"}
            label={doubt.isResolved ? "Resolved" : "Pending"}
          />
        </CardContent>
      </Card>
    </>
  );
};

export default DoubtCard;
