import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticleDetailsData } from "@/entities/Article";
import { Comment } from "@/entities/Comment";
import { getUserAuthData } from "@/entities/User";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  "articleDetails/addCommentForArticle",
  async (text, thunkAPI) => {
    const { extra, rejectWithValue, dispatch, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue("error");
    }

    try {
      const response = await extra.api.post<Comment>(`/comments`, {
        articleId: article.id,
        userId: userData.id,
        text: text,
      });
      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue("Ошибка");
    }
  }
);
