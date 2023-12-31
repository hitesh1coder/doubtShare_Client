import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  doubts: [],
  loading: false,
  status: "idle",
  error: false,
};

export const createDoubt = createAsyncThunk(
  "api/createDoubt",
  async (credentials, { rejectWithValue }) => {
    console.log(credentials);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/api/doubt/create`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const fetchStudentDoubts = createAsyncThunk(
  "api/fetchStudentDoubts",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_HOST}/api/doubt`,
        { params: credentials }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const doubtSlice = createSlice({
  name: "doubt",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createDoubt.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(createDoubt.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.doubts = [action.payload, ...state.doubts];
        toast.success(`${action.payload?.message}`);
      })
      .addCase(createDoubt.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload.data;
        toast.error(`${action.payload.data?.message}`);
      });
    builder
      .addCase(fetchStudentDoubts.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(fetchStudentDoubts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.doubts = action.payload;
      })
      .addCase(fetchStudentDoubts.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload.data;
      });
  },
});

export default doubtSlice.reducer;
