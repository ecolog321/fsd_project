import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { Profile, ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchUserProfileData/fetchUserProfileData";

const initialState: ProfileSchema = {
    readonly:true,
    isLoading:false,
    error:undefined,
    data:undefined
};

export const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {

  },
   extraReducers: (builder) => {
      builder.addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      });
      builder.addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload
      });
      builder.addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducers } = profileSlice;
