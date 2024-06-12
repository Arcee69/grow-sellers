import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../services/api";
import { appUrls } from "../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchAllProducts = createAsyncThunk(
    "products/fetchAllProducts",
    async (data, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.FETCH_PRODUCTS_URL)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getProductsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllProducts.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllProducts.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getProductsSlice.reducer