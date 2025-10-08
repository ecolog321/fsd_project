import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentFrom";

const initialState: AddCommentFormSchema = {
  text: "",
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText:((state, action:PayloadAction<string>)=>{
        state.text = action.payload
    })
  },
  /* extraReducers: (builder) => {
      builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateError = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
        state.validateError=undefined;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateError = action.payload as ValidateProfileError[];
      });
    }, */
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducers } = addCommentFormSlice;
