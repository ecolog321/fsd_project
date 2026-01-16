import { StateSchema } from "@/app/providers/StoreProvider";
import { ArticleType } from "@/entities/Article";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;
export const getArticlesPageInited = (state: StateSchema) =>
  state.articlesPage?._inited;
export const getOrderArticles = (state:StateSchema)=>state.sortArticles?.order
export const getSortArticles = (state:StateSchema)=>state.sortArticles?.sort
export const getSearchArticles = (state:StateSchema)=>state.sortArticles?.search
export const getTypeArticles = (state:StateSchema)=>state.sortArticles?.type ?? ArticleType.ALL
