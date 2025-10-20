import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slice/articlesPageSlice";
import { fetchArticlesList } from "./fetchArticlesList";
import { sortArticlesActions } from "features/sortArticles/model/slice/sortArticlesSlice";
import { ArticleSortFeild, SortOrder } from "features/sortArticles/model/types/sortArticles";
import { ArticleType } from "entities/Article";

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder;
    const sortFromUrl = searchParams.get('sort') as ArticleSortFeild;
    const searchFromUrl = searchParams.get('search');
    const typeFromUrl = searchParams.get('type') as ArticleType ;

    if (orderFromUrl) {
      dispatch(sortArticlesActions.setOrder(orderFromUrl))
    }
    if (sortFromUrl) {
      dispatch(sortArticlesActions.setSort(sortFromUrl))
    }
    if (searchFromUrl) {
      dispatch(sortArticlesActions.setSearch(searchFromUrl))
    }
    if (typeFromUrl) {
      dispatch(sortArticlesActions.setType(typeFromUrl))
    }
    dispatch(articlesPageActions.initState());
    dispatch(
      fetchArticlesList({})
    );
  }
});
