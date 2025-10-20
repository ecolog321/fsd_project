import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsRecommendationsReducers } from "./articleDetailsRecommendationsSlice";
import { articleDetailsCommentsReducers } from "./articleDetailsCommentSlice";

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
    recommendations:articleDetailsRecommendationsReducers,
    comments:articleDetailsCommentsReducers
})