import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchAllOrders = createAsyncThunk(
    "orders/fetchAllOrders",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(`${appUrls?.FETCH_ORDERS_URL}/user/${values}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getOrdersSlice = createSlice({
    name: "orders",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllOrders.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllOrders.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllOrders.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getOrdersSlice.reducer