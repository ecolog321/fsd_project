import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { Profile, ProfileSchema } from "../types/profile";

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
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducers } = profileSlice;
