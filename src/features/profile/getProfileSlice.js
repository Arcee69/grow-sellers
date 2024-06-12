import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchProfile = createAsyncThunk(
    "profile/fetchProfile",
    async (data, { rejectWithValue }) => {
      try {
        const res = await api.get(appUrls?.FETCH_USER_PROFILE_URL)
        return res?.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getProfileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProfile.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchProfile.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchProfile.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getProfileSlice.reducer