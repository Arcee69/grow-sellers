import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchTransactions",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(`${appUrls?.TRANSACTION_URL}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getTransactionSlice = createSlice({
    name: "transactions",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchTransactions.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchTransactions.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchTransactions.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getTransactionSlice.reducer