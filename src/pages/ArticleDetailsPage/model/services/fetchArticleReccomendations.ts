import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";


export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articleDetails/fetchArticleRecommendations", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;
  
  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _limit:4
      },
    });
    if (!response.data) {
      throw new Error();
    }
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue("Ошибка");
  }
});