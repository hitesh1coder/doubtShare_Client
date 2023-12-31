import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  user: localStorage.getItem("doubt_share_user")
    ? JSON.parse(localStorage.getItem("doubt_share_user"))
    : null,
  loading: false,
  status: "",
  error: false,
  userType: "student",
};

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
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("doubt_share_user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(studentLogin.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(studentLogin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem(
          "doubt_share_user",
          JSON.stringify(action.payload)
        );
        toast.success(`${action.payload?.message}`);
      })
      .addCase(studentLogin.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload.data;
        toast.error(`${action.payload.data?.message}`);
      })
      .addCase(studentSignup.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(studentSignup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem(
          "doubt_share_user",
          JSON.stringify(action.payload)
        );
        toast.success(`${action.payload?.message}`);
      })
      .addCase(studentSignup.rejected, (state, action) => {
        state.loading = false;
        state.status = "failed";
        state.error = action.payload.data;
        toast.error(`${action.payload.data?.message}`);
      })
      .addCase(tutorLogin.pending, (state) => {
        state.userType = "tutor";
        state.status = "loading";
        state.loading = true;
      })
      .addCase(tutorLogin.fulfilled, (state, action) => {
        state.userType = "tutor";
        state.status = "succeeded";
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem(
          "doubt_share_user",
          JSON.stringify(action.payload)
        );
        toast.success(`${action.payload?.message}`);
      })
      .addCase(tutorLogin.rejected, (state, action) => {
        state.userType = "tutor";
        state.loading = false;
        state.status = "failed";
        state.error = action.payload.data;
        toast.error(`${action.payload.data?.message}`);
      })
      .addCase(tutorSignup.pending, (state) => {
        state.userType = "tutor";
        state.status = "loading";
        state.loading = true;
      })
      .addCase(tutorSignup.fulfilled, (state, action) => {
        state.userType = "tutor";
        state.status = "succeeded";
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem(
          "doubt_share_user",
          JSON.stringify(action.payload)
        );
        toast.success(`${action.payload?.message}`);
      })
      .addCase(tutorSignup.rejected, (state, action) => {
        state.userType = "tutor";
        state.loading = false;
        state.status = "failed";
        state.error = action.payload.data;
        toast.error(`${action.payload.data?.message}`);
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
