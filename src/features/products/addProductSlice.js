import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import { appUrls } from "../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
};


export const createProducts = createAsyncThunk(
    "products/createProducts", 
    async (data, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.CREATE_PRODUCTS_URL, data)
            console.log(res, "lamba")
            if(res.status === 200) {
                toast.success(`${res?.data?.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            return res;
          } catch (err) {
                toast.error(`${err.data.message}`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            return rejectWithValue(err);
          }

})

const addProductSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder.addCase(createProducts.pending, state => {
            state.loading = true
        });
        builder.addCase(createProducts.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(createProducts.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default addProductSlice.reducer
