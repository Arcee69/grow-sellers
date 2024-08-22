import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

// import TokenService from "../../services/token";
import { api } from "../../services/api"
import { appUrls } from "../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const loginUser = createAsyncThunk(
    "user/loginUser", 
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.LOGIN_URL, data);
            if (res?.status === 200) {
                const { token, ...newObject } = res?.data;
                localStorage.setItem("token", token);
                localStorage.setItem("userObj", JSON.stringify(newObject));
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
            return res?.data
        }
        catch (err) {
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
            return rejectWithValue(err.data.message)
        }
    }
)


const loginSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default loginSlice.reducer