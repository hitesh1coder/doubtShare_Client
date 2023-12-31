import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// -----------------Student-------------

export const studentLogin = createAsyncThunk(
  "api/studentLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/api/auth/login/student`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
export const studentSignup = createAsyncThunk(
  "api/studentSignup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/api/auth/signup/student`,
        credentials
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// -----------------Tutor----------------------
export const tutorLogin = createAsyncThunk(
  "api/tutorLogin",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/api/auth/login/tutor`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Async thunk for user studentsignup (optional based on your needs)
export const tutorSignup = createAsyncThunk(
  "api/tutorSignup",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/api/auth/signup/tutor`,
        credentials
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);
