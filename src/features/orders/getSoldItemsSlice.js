import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchAllSoldItems = createAsyncThunk(
    "orders/fetchAllSoldItems",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(`${appUrls?.FETCH_PURCHASED_ITEMS_URL}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getSoldItemsSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllSoldItems.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllSoldItems.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllSoldItems.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getSoldItemsSlice.reducer