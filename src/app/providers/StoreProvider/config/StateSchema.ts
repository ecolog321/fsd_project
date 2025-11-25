import {
  Action,
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { UserSchema } from "entities/User";
import { AddCommentFormSchema } from "features/addCommentForm";
import { LoginSchema } from "features/authByUsername";
import { ProfileSchema } from "features/editableProfileCard";
import { SortArticlesSchema } from "features/sortArticles/model/types/sortArticles";
import { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "pages/ArticlePage";
import { rtkApi } from "shared/api/rtkApi";
import { ScrollSaveSchema } from "widgets/Page";

export interface StateSchema {
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  scrollSave: ScrollSaveSchema;
  sortArticles?: SortArticlesSchema;
}

export type ReducersStateSchema = Reducer<UserSchema, Action<string>> &
  Reducer<LoginSchema, Action<string>>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectedValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
