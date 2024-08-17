import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../services/api";
import { appUrls } from "../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
};


export const updatePassword = createAsyncThunk(
    "profile/updatePassword", 
    async (data, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.UPDATE_PASSWORD_URL, data)
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

const updatePasswordSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(updatePassword.pending, state => {
            state.loading = true
        });
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default updatePasswordSlice.reducer
