import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchAllCategories = createAsyncThunk(
    "category/fetchAllCategories",
    async (data, { rejectWithValue }) => {
      try {
        const res = await api.get(appUrls?.FETCH_PRODUCTS_CATEGORIES_URL)
        return res?.data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getCategorySlice = createSlice({
    name: "category",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllCategories.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getCategorySlice.reducer