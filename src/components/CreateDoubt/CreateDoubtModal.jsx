import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { createDoubt } from "../../Redux/Slices/DoubtSlice";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

const CreateDoubtModal = () => {
  const { user } = useSelector((state) => state.user);
  const studentId = user.userid;

  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [doubt, setDoubt] = useState("");

  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDoubtChange = (event) => {
    setDoubt(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (doubt.length > 5 && subject) {
      dispatch(createDoubt({ doubt, subject, studentId }));
    } else {
      toast.error("require all fields");
    }

    setDoubt("");
    setSubject("");
    handleClose();
  };
  return (
    <div>
      <Button variant="contained" color="info" onClick={handleOpen}>
        Create New Doubt
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h2>Fill your Doubt</h2>
          <TextField
            sx={{ width: "100%" }}
            id="filled-multiline-static"
            label="Your Doubt"
            multiline
            rows={4}
            variant="filled"
            value={doubt}
            onChange={handleDoubtChange}
          />
          <Box sx={{ minWidth: 120, width: 150, margin: "0.5rem 0" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subject}
                label="Subject"
                onChange={handleSubjectChange}
              >
                <MenuItem value="Mathmatics">Mathmatics</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="English">English</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="success" onClick={handleSubmit}>
              {" "}
              Create
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default CreateDoubtModal;
