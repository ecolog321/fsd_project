import { combineReducers } from "@reduxjs/toolkit";54
 
import { articleDetailsRecommendationsReducers } from "./articleDetailsRecommendationsSlice";
import { articleDetailsCommentsReducers } from "./articleDetailsCommentSlice";

export const articleDetailsPageReducer = combineReducers({
    recommendations:articleDetailsRecommendationsReducers,
    comments:articleDetailsCommentsReducers
})