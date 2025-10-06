import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/articleDetailsSchema";
import { Article } from "../types/article";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState:ArticleDetailsSchema ={
    isLoading:false,
    error:undefined,
    data:undefined,
}

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    
  },
  extraReducers:(builder)=> {
    builder
    .addCase(fetchArticleById.pending, (state)=>{
        state.error=undefined;
        state.isLoading=true;
    })
    .addCase(fetchArticleById.fulfilled, (state, actions:PayloadAction<Article>)=>{
        state.isLoading=false;
        state.data=actions.payload;
        state.error=undefined;
    })
    .addCase(fetchArticleById.rejected, (state, action)=>{
        state.isLoading=false;
        state.error=action.payload as string

    })
  }
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducers } = articleDetailsSlice;
