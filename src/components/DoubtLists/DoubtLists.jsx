import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Fab,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import DownloadIcon from "@mui/icons-material/Download";

import { useDispatch, useSelector } from "react-redux";
import { fetchStudentDoubts } from "../../Redux/Slices/DoubtSlice";

import { DoubtCard } from "../index";

const DoubtHistory = () => {
  const [subject, setSubject] = useState("");
  const [sort, setSort] = useState({ sortBy: "createdAt", order: "desc" });

  const { doubts, status } = useSelector((state) => state.doubt);
  const { user } = useSelector((state) => state.user);
  const studentId = user.userid;

  const handleFilterChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSortChange = (e) => {
    setSort({ sortBy: "createdAt", order: e.target.value });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudentDoubts({ studentId, subject, sort }));
  }, [dispatch, studentId, subject, sort]);

  return (
    <div>
      <Container
        sx={{
          minWidth: "80vw",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FormHelperText>Filter By :</FormHelperText>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Subject</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={subject}
            label="Subject"
            onChange={handleFilterChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Mathmatics">Mathmatics</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="English">English</MenuItem>
          </Select>
        </FormControl>
        <FormHelperText>Sort By :</FormHelperText>
        <Box sx={{ margin: "0.2rem", zIndex: "1" }}>
          <Fab
            variant="extended"
            size="small"
            color={sort.order === "asc" ? "primary" : "default"}
            value="asc"
            onClick={handleSortChange}
          >
            <FileUploadIcon />
            Oldest
          </Fab>
          <Fab
            variant="extended"
            size="small"
            color={sort.order === "desc" ? "primary" : "default"}
            value="desc"
            onClick={handleSortChange}
          >
            <DownloadIcon />
            Newest
          </Fab>
        </Box>
      </Container>
      <hr />

      {status === "loading" ? (
        <h2>Loading...</h2>
      ) : (
        <Container
          sx={{
            display: "flex",
            width: "80vw",
            flexWrap: "wrap",
          }}
        >
          {doubts?.map((data) => {
            return <DoubtCard key={data._id} doubt={data} />;
          })}
        </Container>
      )}
    </div>
  );
};

export default DoubtHistory;
